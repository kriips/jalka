Messages = new Meteor.Collection('messages');

Meteor.methods({
	addMessage: function (messageAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to post messages");

		// ensure the post has content
		if (!messageAttributes.message)
			throw new Meteor.Error(422, 'Please fill in the message');
		var message = {
			event: messageAttributes.competition,
			userId: user._id,
			author: user.username,
			message: messageAttributes.message,
			timestamp: moment().format('YYYY-MM-DD HH:mm:ss')
		};
		console.log(message);
		var messageId = Messages.insert(message);
		return messageId;
	}

});

//refreshChart = function (competition) {
//	console.log('refreshing chart');
//	var chart = {};
//	chart.group = new Array();
//	chart.playoffs = new Array();
//	chart.latest = new Array();
//	var seq = 0;
//	competition.participants.forEach(function (user) {
//		var runningScore = 0;
//		var userName = Meteor.users.findOne({_id: user.userId}).username;
//		// group stage scores
//		var score = {
//			userId: user.userId,
//			username: userName,
//			score: runningScore
//		};
//		chart.latest[seq] = score;
//		competition.fixtures.forEach(function (fixture) {
//			if (fixture.result) {
//				if (fixture.result === Predictions.findOne({userId: user.userId, event: competition.url, fixtureId: 'fixture_' + fixture.id}).prediction) {
//					runningScore += 1;
//				}
//				if (!chart.group[fixture.id]) {
//					chart.group[fixture.id] = new Array();
//				}
//
//				score = {
//					userId: user.userId,
//					username: userName,
//					score: runningScore
//				};
//				chart.group[fixture.id].push(score);
//				chart.latest[seq] = score;
//			}
//
//		})
//
//		// playoff scores
//		competition.playoffs.forEach(function (stage) {
//			if (stage.teams.length > 0) {
//				stage.teams.forEach(function (team) {
//					if (Predictions.findOne({userId: user.userId, event: competition.url, stage: stage.id, key: team.key})) {
//						runningScore += stage.points;
//					}
//				})
//				if (!chart.playoffs[stage.id]) {
//					chart.playoffs[stage.id] = new Array();
//				}
//				score = {
//					userId: user.userId,
//					username: userName,
//					score: runningScore
//				};
//				chart.playoffs[stage.id].push(score);
//				chart.latest[seq] = score;
//			}
//		})
//
//		seq++;
//	})
//	calculatePlaces(chart.group);
//	calculatePlaces(chart.playoffs);
//	calculatePlaces([chart.latest]);
//	Competitions.update(competition._id, {$set: {chart: chart}});
//}
//
//calculatePlaces = function (item) {
//	item.forEach(function (fixture) {
//		fixture.sort(function (a, b) {
//			return b.score - a.score;
//		});
//		var points = new Array();
//		fixture.forEach(function (row) {
//			points.push(row.score);
//		})
//		fixture.forEach(function (row) {
//			row.place = points.indexOf(row.score) + 1;
//		})
//	})
//}