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
				Session.set('competitionsLoaded', true);
				Meteor.subscribe('competition', {url: defaultCompetition.url});
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
			console.log('entering waiton');
			Meteor.subscribe('usersOnline');
			Meteor.subscribe('allUsers');
			var url = this.params.url;
			if (!Session.get('competitionsLoaded')){
				console.log('starting to load competitions');
				return [
					Meteor.subscribe('competition', {url: url}),
					Meteor.subscribe('competitions', function () {
						Session.set('competitionsLoaded', true);
						console.log ('competitions loaded');
					})
				];
			}
			else {
				return Meteor.subscribe('competition', {url: url});
			}
		},
		data: function() {
			var selectedCompetition = Competitions.findOne({url: this.params.url});
			Session.set('selectedCompetition', selectedCompetition.name);
			var templateData = {
				competition: Competitions.findOne({name: Session.get('selectedCompetition')})
			};
			console.log(Session.get('selectedCompetition'));
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