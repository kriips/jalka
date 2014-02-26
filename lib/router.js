Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		waitOn: function() {
			Meteor.subscribe('usersOnline');
			Meteor.subscribe('allUsers');
			return Meteor.subscribe('competitions', function () {
				var defaultCompetition = Competitions.findOne({name: 'MM 2014'});
				Session.set('selectedCompetition', defaultCompetition.name);
				Meteor.subscribe('competition', {name: defaultCompetition.name});
				Meteor.subscribe('messages', {competition: defaultCompetition.name});
			});
		},
		data: function() {
			var templateData = {
				messages: Messages.find({competition: Session.get('selectedCompetition')}),
				competition: Competitions.findOne({name: Session.get('selectedCompetition')})
			};
			return templateData;
		}
	});

	this.route('competition', {
		path: '/comp/:url',
		template: 'home',
		waitOn: function() {
			Meteor.subscribe('usersOnline');
			Meteor.subscribe('allUsers');
			var url = this.params.url;
			return Meteor.subscribe('competitions', function () {
				var selectedCompetition = Competitions.findOne({url: url});
				Session.set('selectedCompetition', selectedCompetition.name);
				Meteor.subscribe('competition', {name: selectedCompetition.name});
				Meteor.subscribe('messages', {competition: selectedCompetition.name});
			});
		},
		data: function() {
			var templateData = {
				messages: Messages.find({competition: Session.get('selectedCompetition')}),
				competition: Competitions.findOne({name: Session.get('selectedCompetition')})
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
Router.before(requireLogin, {only: 'home'})