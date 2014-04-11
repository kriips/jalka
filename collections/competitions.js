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
					console.log(error);
					console.log(docs);
				});
		}
		else if (predictionType == 'playoff') {
			Competitions.upsert(
				{_id: competition._id, "playoffs.id": parseInt(resultAttributes.stage)},
				{$push: {"playoffs.$.teams": {key: resultAttributes.key}}}
				, function (error, docs) {
					console.log(error);
					console.log(docs);
				});
		}
//		refreshChart(competition);

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
				console.log(error);
				console.log(docs);
			});
	}

});