Predictions = new Meteor.Collection('predictions');

Meteor.methods({
	addPrediction: function(predictionAttributes) {
		var user = Meteor.user();
		if (!user)
			throw new Meteor.Error(401, "You need to login to send a prediction");

		// ensure the post has content
		if (!predictionAttributes.result)
			throw new Meteor.Error(422, 'Result needed');

		// ensure the post has content
		if (!predictionAttributes.game)
			throw new Meteor.Error(422, 'Game needed');

		// ensure the post has content
		if (!predictionAttributes.event)
			throw new Meteor.Error(422, 'Event needed');

		var prediction = Predictions.findOne({
			userId: user._id,
			fixtureId: predictionAttributes.game,
			event: predictionAttributes.event
		});
		if (prediction) {
			Predictions.update(prediction._id, {
				prediction: predictionAttributes.result
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
		return;
	}

});