Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loadingTemp',
	notFoundTemplate: 'notFound'
});

Router.map(function() {
	this.route('home', {
		path: '/',
		onBeforeAction: function () {
			if (Meteor.user()) {
				this.redirect('/comp/mm2014');
			}
			else{
				this.render('accessDenied');
			}
		}
	});
	this.route('token', {
		path: '/token/:token',
		where: 'client',
		onBeforeAction: function(pause) {
			if (!this.params.token) {
				this.render('accessDenied');
				pause();
			}
			else {
				Meteor.call('tokenLogin', this.params.token, function (err, result) {
					if (err) {
						Router.render('accessDenied');
						pause();
					}
					else {
						Meteor.loginWithPassword(result, result.replace(' ', ''), function(err) {
							Router.go('/comp/mm2014');
						});
					}
				});
				this.render('loadingTemp');
				pause();
			}
		}
	});

	this.route('addResult',{
		path: '/comp/:url/addResult',
		onBeforeAction: function(pause) {
			if (!Meteor.user()) {
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
		onBeforeAction: function(pause) {
			if (!Meteor.user()) {
				this.render('accessDenied');
				pause();
			}
		},
		waitOn: function() {
			this.subscribe('userStatus');
			this.subscribe('allUsers');
			var url = this.params.url;
			return [
				this.subscribe('competition', {url: url}),
				this.subscribe('predictions', {event: url}),
				this.subscribe('messages', {event: url}),
				this.subscribe('competitions')
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