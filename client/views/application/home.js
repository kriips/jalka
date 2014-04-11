Template.home.events({
});

Template.home.helpers({
	activeTab: function(name) {
		if (name == 'predict') {
			console.log('predict tab:');
			console.log(Session.get('selectedCompetition').isPredictable ? 'active' : 'disabled');
			return Session.get('selectedCompetition').isPredictable ? 'active' : 'disabled';
		}
		else {
			console.log(Session.get('selectedTab'));
			return name == Session.get('selectedTab') ? 'active' : '';
		}
	},
	activeTabStyle: function(name) {
		return name == Session.get('selectedTab') ? 'fade in active' : 'fade';
	},
	disableTab: function(name) {
		return name == 'predict' && (!Session.get('selectedCompetition').isPredictable) ? '' : 'tab';
	}
});

Template.home.rendered = function () {
	$(".nav-tabs a[data-toggle=tab]").on("click", function(e) {
		if ($(this).hasClass("disabled")) {
			e.preventDefault();
			return false;
		}
	});
	if (Session.get('selectedCompetition').isPredictable) {
		$('a[href="#predict"]').tab('show');
		Session.set('selectedTab', 'predict');
	}
	else {
		$('a[href="#watch"]').tab('show');
		Session.set('selectedTab', 'watch');
	}
	$('#predictLink').click(function(e) {
		if (Session.get('selectedCompetition').isPredictable) {
			Session.set('selectedTab', 'predict');
		}
		else {
			Session.set('selectedTab', 'watch');
		}
	});
	$('#watchLink').click(function(e) {
		Session.set('selectedTab', 'watch');
	});
}