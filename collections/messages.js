Messages = new Meteor.Collection('messages');

Messages.allow({
	insert: function(userId, doc) {
		// only allow posting if you are logged in
		return !! userId;
	}
});

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
			message: messageAttributes.message
		};
		var messageId = Messages.insert(message);

		return messageId;
	}

});