Template.home.events({
});

Template.home.helpers({
	activeTab: function(name) {
		console.log(name);
		console.log(Session.get('selectedTab'));
		return name == Session.get('selectedTab') ? 'active' : '';
	}
});

Template.home.rendered = function () {
	console.log('home rendered');

	if (Session.get('selectedCompetition').isPredictable) {
		$('a[href="#predict"]').tab('show');
		Session.set('selectedTab', 'predict');
	}
	else {
		$('a[href="#watch"]').tab('show');
		Session.set('selectedTab', 'watch');
	}
	$('#predictLink').click(function(e) {
		console.log('predict clicked');
		Session.set('selectedTab', 'predict');
	});
	$('#watchLink').click(function(e) {
		console.log('watch clicked');
		Session.set('selectedTab', 'watch');
	});
}