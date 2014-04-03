Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loadingTemp',
	notFoundTemplate: 'notFound'
});

Router.onBeforeAction('loading')
Router.onBeforeAction('dataNotFound')

Router.map(function() {
	this.route('home', {
		path: '/',
		onBeforeAction: function () {
			console.log('1st reroute');
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
			console.log('entering waiton');
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
			console.log('entering data');
			if (this.ready()) {
				var selectedCompetition = Competitions.findOne({url: this.params.url});
				console.log(this.params.url);
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

Router.onBeforeAction(requireLogin);