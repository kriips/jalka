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
			changeCount('add', predictionAttributes.event, predictionAttributes.result, predictionAttributes.game);
			if (prediction) {
				changeCount('subtract', predictionAttributes.event, prediction.prediction, prediction.fixtureId);
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
						title: predictionAttributes.title,
						stage: predictionAttributes.stage,
						event: predictionAttributes.event
					},
					function () {
					}
				);
			}
		}

		// check whether user is added to chart
		var competition = Competitions.findOne({url: predictionAttributes.event});
		// if the whole prediction is filled, add the user to the chart
		if (Predictions.find({userId: Meteor.user()._id, event: predictionAttributes.event}).count() >= competition.maxPredictions) {
			if (Competitions.find({url: predictionAttributes.event, "participants.userId": user._id}).count() == 0){
				Competitions.update(competition._id, {$addToSet: {participants: {userId: user._id, username: user.username}}}, function() {
					refreshChart(Competitions.findOne({url: predictionAttributes.event}));
				});
			}
			else {
				refreshChart(competition);
			}
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

changeCount = function (operation, event, key, fixture) {
	fixture = fixture.split('_');
	var fixtureId = parseInt(fixture[1]);
	var competition = Competitions.findOne({url: event});
	competition.fixtures.forEach(function (fixture) {
		if (fixture.id === fixtureId) {
			if (key === 'draw') {
				count = fixture.draw_count;
				count = modifyCount(operation, count);
				Competitions.update({url: event, 'fixtures.id':  fixtureId}, {$set: {"fixtures.$.draw_count": count}});
			}
			else if (fixture.team1_key == key) {
				count = fixture.team1_count;
				count = modifyCount(operation, count);
				Competitions.update({url: event, 'fixtures.id':  fixtureId}, {$set: {"fixtures.$.team1_count": count}});
			}
			else if (fixture.team2_key == key) {
				count = fixture.team2_count;
				count = modifyCount(operation, count);
				Competitions.update({url: event, 'fixtures.id':  fixtureId}, {$set: {"fixtures.$.team2_count": count}});
			}
		}
	});
}

modifyCount = function (operation, count) {
	if (operation == 'subtract') {
		return count - 1;
	}
	else if (operation == 'add') {
		return count + 1;
	}
}