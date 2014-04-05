Competitions = new Meteor.Collection('competitions');

Meteor.methods({
	addMessage: function(messageAttributes) {
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

	addResult: function(resultAttributes) {
		console.log('will be adding a result here');
	}

});