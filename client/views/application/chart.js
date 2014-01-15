Meteor.subscribe('allUsers');
Meteor.subscribe('usersOnline');

Template.chart.allUsers = function() {
	var users =  Meteor.users.find({});
	return users;
};

Template.user.currentUser = function() {
	return this._id === Meteor.userId();
};