Template.chart.allUsers = function() {
	var users =  Meteor.users.find({});
	return users;
};

Template.user.currentUser = function() {
	return this.username === Meteor.user().username;
};

Template.user.onlineUser = function() {
	var user = Meteor.users.findOne({username: this.username});
	if (user)
		return user.status.online;
	else
		return false;
};