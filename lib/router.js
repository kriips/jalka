Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() {
		Meteor.subscribe('messages');
		return;
	}
});

Router.map(function() {
	this.route('home', {path: '/'});
});