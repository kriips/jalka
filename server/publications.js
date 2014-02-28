Meteor.publish('competitions', function() {
	return Competitions.find({
	},
	{
		fields: {
			name: 1,
			url: 1,
			year: 1
		}
	});
});

Meteor.publish('competition', function(options) {
	return Competitions.find({url : options.url});
});

Meteor.publish('predictions', function(options) {
	return Predictions.find({event : options.event});
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