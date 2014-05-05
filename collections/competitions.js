Competitions = new Meteor.Collection('competitions');

Meteor.methods({
	addMessage: function (messageAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to post messages");

		// ensure the post has content
		if (!messageAttributes.message)
			throw new Meteor.Error(422, 'Please fill in the message');
		var message = {
			userId: user._id,
			author: user.username,
			message: messageAttributes.message,
			timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
		};
		var messageId = Competitions.update(
			messageAttributes.competition._id,
			{$addToSet: {messages: message}}
		);

		return messageId;
	},

	addResult: function (resultAttributes) {
		var user = Meteor.user();
		var competition = Competitions.findOne({url: resultAttributes.event});
		if (!user)
			throw new Meteor.Error(401, "You need to login to send a result");

		// ensure the post has content
		if (!(resultAttributes.result && resultAttributes.game) && !(resultAttributes.stage && resultAttributes.key))
			throw new Meteor.Error(422, 'Missing data');

		// ensure the post has content
		if (!resultAttributes.event)
			throw new Meteor.Error(422, 'Event needed');

		var predictionType;
		if (resultAttributes.result && resultAttributes.game) {
			predictionType = 'group';
		}
		else {
			predictionType = 'playoff';
		}
		if (predictionType == 'group') {
			var fixtureId = resultAttributes.game.split('_');
			fixtureId = fixtureId[1];
			Competitions.update(
				{_id: competition._id, "fixtures.id": parseInt(fixtureId)},
				{$set: {"fixtures.$.result": resultAttributes.result}}
				, function (error, docs) {
//					console.log(error);
//					console.log(docs);
					refreshChart(Competitions.findOne({url: resultAttributes.event}));
				});
		}
		else if (predictionType == 'playoff') {
			Competitions.upsert(
				{_id: competition._id, "playoffs.id": parseInt(resultAttributes.stage)},
				{$push: {"playoffs.$.teams": {key: resultAttributes.key}}}
				, function (error, docs) {
//					console.log(error);
//					console.log(docs);
					refreshChart(Competitions.findOne({url: resultAttributes.event}));
				});
		}

		return;
	},

	removeResult: function (resultAttributes) {
		var user = Meteor.user();
		var competition = Competitions.findOne({url: resultAttributes.event});
		if (!user)
			throw new Meteor.Error(401, "You need to login to delete a result");
		Competitions.update(
			{_id: competition._id, "playoffs.id": parseInt(resultAttributes.stage)},
			{$pull: {"playoffs.$.teams": {key: resultAttributes.key}}}
			, function (error, docs) {
//				console.log(error);
//				console.log(docs);
				refreshChart(competition);
			});
	}

});

refreshChart = function (competition) {
	console.log('refreshing chart');
	var chart = {};
	chart.group = new Array();
	chart.playoffs = new Array();
	chart.latest = new Array();
	var seq = 0;
	competition.participants.forEach(function (user) {
		var runningScore = 0;
		var userName = Meteor.users.findOne({_id: user.userId}).username;
		// group stage scores
		var score = {
			userId: user.userId,
			username: userName,
			score: runningScore
		};
		chart.latest[seq] = score;
		competition.fixtures.forEach(function (fixture) {
			if (fixture.result) {
				if (fixture.result === Predictions.findOne({userId: user.userId, event: competition.url, fixtureId: 'fixture_' + fixture.id}).prediction) {
					runningScore += 1;
				}
				if (!chart.group[fixture.id]) {
					chart.group[fixture.id] = new Array();
				}

				score = {
					userId: user.userId,
					username: userName,
					score: runningScore
				};
				chart.group[fixture.id].push(score);
				chart.latest[seq] = score;
			}

		})

		// playoff scores
		competition.playoffs.forEach(function (stage) {
			if (stage.teams.length > 0) {
				stage.teams.forEach(function (team) {
					if (Predictions.findOne({userId: user.userId, event: competition.url, stage: stage.id, key: team.key})) {
						runningScore += stage.points;
					}
				})
				if (!chart.playoffs[stage.id]) {
					chart.playoffs[stage.id] = new Array();
				}
				score = {
					userId: user.userId,
					username: userName,
					score: runningScore
				};
				chart.playoffs[stage.id].push(score);
				chart.latest[seq] = score;
			}
		})

		seq++;
	})
	calculatePlaces(chart.group);
	calculatePlaces(chart.playoffs);
	calculatePlaces([chart.latest]);
	Competitions.update(competition._id, {$set: {chart: chart}});
}

calculatePlaces = function (item) {
	item.forEach(function (fixture) {
		fixture.sort(function (a, b) {
			return b.score - a.score;
		});
		var points = new Array();
		fixture.forEach(function (row) {
			points.push(row.score);
		})
		fixture.forEach(function (row) {
			row.place = points.indexOf(row.score) + 1;
		})
	})
}