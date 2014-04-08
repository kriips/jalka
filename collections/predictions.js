Predictions = new Meteor.Collection('predictions');

Meteor.methods({
	addPrediction: function (predictionAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to send a prediction");

		// ensure the post has content
		if (!(predictionAttributes.result && predictionAttributes.game) && !(predictionAttributes.stage && predictionAttributes.key))
			throw new Meteor.Error(422, 'Missing data');

		// ensure the post has content
		if (!predictionAttributes.event)
			throw new Meteor.Error(422, 'Event needed');

		var predictionType;
		if (predictionAttributes.result && predictionAttributes.game) {
			predictionType = 'group';
		}
		else {
			predictionType = 'playoff';
		}
		if (predictionType == 'group') {
			var prediction = Predictions.findOne({
				userId: user._id,
				fixtureId: predictionAttributes.game,
				event: predictionAttributes.event
			});
			if (prediction) {
				Predictions.update(prediction._id, {
						$set: {
							prediction: predictionAttributes.result
						}
					},
					function () {
					});
			}
			else {
				Predictions.insert({
						userId: user._id,
						fixtureId: predictionAttributes.game,
						prediction: predictionAttributes.result,
						event: predictionAttributes.event
					},
					function () {
					});
			}
		}
		else if (predictionType == 'playoff') {
			var prediction = Predictions.findOne({
				userId: user._id,
				key: predictionAttributes.key,
				stage: predictionAttributes.stage,
				event: predictionAttributes.event
			});
			if (!prediction) {
				Predictions.insert({
						userId: user._id,
						key: predictionAttributes.key,
						stage: predictionAttributes.stage,
						event: predictionAttributes.event
					},
					function () {
					}
				);
			}
		}

		// check whether user is added to chart
		console.log('added to chart?:');
		var competition = Competitions.findOne({url: predictionAttributes.event});
		// if the whole prediction is filled, add the user to the chart
		console.log(Predictions.find({userId: user._id, event: predictionAttributes.event}).count());
		console.log(competition.maxPredictions);
		if (Predictions.find({userId: Meteor.user()._id, event: predictionAttributes.event}).count() >= competition.maxPredictions) {
			if (Competitions.find({url: predictionAttributes.event, "participants.userId": user._id}).count() == 0){
				Competitions.update(competition._id, {$addToSet: {participants: {userId: user._id}}});
			}
//			refreshChart(competition);
			return({message: 'predictionCompleted'});
		}

		return;
	},

	removePrediction: function (predictionAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to delete a prediction");

		Predictions.remove({
				userId: user._id,
				key: predictionAttributes.key,
				stage: predictionAttributes.stage,
				event: predictionAttributes.event
			},
			function () {
			}
		);
	}

});

refreshChart = function(competition) {
	console.log('refreshing chart');
	Competitions.update(competition._id, {$unset: {chart: ""}});
	var chart = new Array();
	competition.participants.forEach(function(user) {
		console.log(competition);
		var score = 0;
		// group stage scores
		competition.fixtures.forEach(function(fixture) {
			if (fixture.result === Predictions.findOne({userId: user.userId, event: competition.url, fixtureId: 'fixture_' + fixture.id}).prediction) {
				score += 1;
			}
		})

		// playoff scores
		competition.playoffs.forEach(function(stage) {
			stage.teams.forEach(function(team) {
				if (Predictions.findOne({userId: user.userId, event: competition.url, stage: stage.id, key: team})) {
					score += stage.points;
				}
			})
		})

		chart.push({userId: user.userId, username: Meteor.users.findOne({_id: user.userId}).username, points: score});

	})
	console.log('scores calculated');
	chart.sort(function (a,b) {
		return b.points - a.points;
	});

	var points = new Array();
	chart.forEach(function(row){
		points.push(row.points);
	})

	chart.forEach(function(row){
		row.place = points.indexOf(row.points) + 1;
	})
	console.log(chart);
	Competitions.update(competition._id, {$set: {chart: chart}});
}