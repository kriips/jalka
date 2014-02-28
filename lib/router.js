Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		before: function () {
			this.redirect('/comp/mm2014')
		}
	});

	this.route('competition', {
		path: '/comp/:url',
		layoutTemplate: 'layout',
		template: 'home',
		yieldTemplates: {
			'header': {to: 'header'}
		},
		waitOn: function() {
			Meteor.subscribe('usersOnline');
			Meteor.subscribe('allUsers');
			var url = this.params.url;
			return [
				Meteor.subscribe('competition', {url: url}),
				Meteor.subscribe('competitions'),
				Meteor.subscribe('predictions', {event: url})
			];
		},
		data: function() {
			var selectedCompetition = Competitions.findOne({url: this.params.url});
			Session.set('selectedCompetition', selectedCompetition);
			var templateData = {
				competition: Competitions.findOne({name: Session.get('selectedCompetition').name}),
			};
			return templateData;
		}
	});
});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		this.stop();
	}
}
Router.before(requireLogin)