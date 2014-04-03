Meteor.publish('competitions', function() {
	console.log('publishing competitions');
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
	console.log('publishing active competition');
	return Competitions.find({url : options.url});
});

Meteor.publish('predictions', function(options) {
	console.log('publishing predictions');
	return Predictions.find({event : options.event});
});

Meteor.publish('userStatus', function() {
	console.log('publishing user status');
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
	console.log('publishing users');
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