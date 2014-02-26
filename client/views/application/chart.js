Template.chart.allUsers = function() {
	var users =  Meteor.users.find({});
	return users;
};

Template.user.currentUser = function() {
	return this.name === Meteor.user.name;
};

Template.user.onlineUser = function() {
	return Meteor.user.status.online;
};