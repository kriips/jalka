Predictions = new Meteor.Collection('predictions');

Meteor.methods({
	addPrediction: function(predictionAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to send a prediction");

		// ensure the post has content
		if (!(predictionAttributes.result && predictionAttributes.game) && !(predictionAttributes.stage && predictionAttributes.team))
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
				function() {
				});
			}
			else {
				Predictions.insert({
					userId: user._id,
					fixtureId: predictionAttributes.game,
					prediction: predictionAttributes.result,
					event: predictionAttributes.event
				},
				function() {
				});
			}
		}
		else if (predictionType == 'playoff') {
			var prediction = Predictions.findOne({
				userId: user._id,
				team: predictionAttributes.team,
				stage: predictionAttributes.stage,
				event: predictionAttributes.event
			});
			if (!prediction) {
				Predictions.insert({
					userId: user._id,
					team: predictionAttributes.team,
					stage: predictionAttributes.stage,
					event: predictionAttributes.event
				},
				function() {
				});
			}
		}
		return;
	},

	removePrediction: function(predictionAttributes) {

	}

});