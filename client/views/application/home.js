Template.home.events({
});

Template.home.helpers({
	activeTab: function(name) {
		return name == Session.get('selectedTab') ? 'active' : '';
	}
});

Template.home.rendered = function () {

	if (Session.get('selectedCompetition').isPredictable) {
		$('a[href="#predict"]').tab('show');
		Session.set('selectedTab', 'predict');
	}
	else {
		$('a[href="#watch"]').tab('show');
		Session.set('selectedTab', 'watch');
	}
	$('#predictLink').click(function(e) {
		Session.set('selectedTab', 'predict');
	});
	$('#watchLink').click(function(e) {
		Session.set('selectedTab', 'watch');
	});
}