Meteor.publish('messages', function() {
	return Messages.find();
});

Meteor.publish('competitions', function() {
	return Competitions.find();
});

Meteor.publish('userStatus', function() {
	return Meteor.users.find({
		"status.online": true
	},
	{
		fields: {
			username: 1
		}
	});
});

Meteor.publish('allUsers', function() {
	return Meteor.users.find({
	},
	{
		fields: {
			username: 1,
			status: 1,
			id: 1
		}
	});
});