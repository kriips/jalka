Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loadingTemp',
	notFoundTemplate: 'notFound'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		onBeforeAction: function () {
			this.redirect('/comp/mm2014')
		}
	});

	this.route('addResult',{
		path: '/comp/:url/addResult',
		onBeforeAction: function(pause) {
			if (!Meteor.user()) {
				if (Meteor.loggingIn())
					this.render(this.loadingTemplate);
				else
					this.render('accessDenied');
				pause();
			}
			else if (Meteor.user().username !== "Mikk Kard") {
				this.render('haveToBeMikk');
				pause();
			}
			Session.set('addingResult', true);
		},
		waitOn: function() {
			this.subscribe('userStatus');
			this.subscribe('allUsers');
			var url = this.params.url;
			return [
				this.subscribe('competition', {url: url}),
				this.subscribe('competitions'),
				this.subscribe('predictions', {event: url})
			];
		},
		data: function() {
			Session.set('addingResult', true);
			if (this.ready()) {
				var selectedCompetition = Competitions.findOne({url: this.params.url});
				Session.set('selectedCompetition', selectedCompetition);
				document.title = 'S! jalkaennustus: ' + selectedCompetition.name;
				var templateData = {
					competition: Competitions.findOne({name: Session.get('selectedCompetition').name})
				};
				return templateData;
			}
			else {
				return false;
			}
		},
		action: function () {
			if (this.ready())
				this.render();
			else
				this.render('loadingTemp');
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
			this.subscribe('userStatus');
			this.subscribe('allUsers');
			var url = this.params.url;
			return [
				this.subscribe('competition', {url: url}),
				this.subscribe('competitions'),
				this.subscribe('predictions', {event: url})
			];
		},
		data: function() {
			Session.set('addingResult', false);
			if (this.ready()) {
				console.log('data is ready');
				var selectedCompetition = Competitions.findOne({url: this.params.url});
				Session.set('selectedCompetition', selectedCompetition);
				document.title = 'S! jalkaennustus: ' + selectedCompetition.name;
				var templateData = {
					competition: Competitions.findOne({name: Session.get('selectedCompetition').name})
				};
				return templateData;
			}
			else {
				return false;
			}
		},
		action: function () {
			if (this.ready())
				this.render();
			else
				this.render('loadingTemp');
		}
	});
});

var requireLogin = function(pause) {
	if (!Meteor.user()) {
		if (Meteor.loggingIn())
			this.render(this.loadingTemplate);
		else
			this.render('accessDenied');
		pause();
	}
}

Router.onBeforeAction(requireLogin);