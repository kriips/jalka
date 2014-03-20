Template.home.events({
	'click .nav-pills': function(e) {
//		e.preventDefault();
		$(e.target).closest('li').addClass('active');
		console.log($(e.target));
	}
});

Template.home.rendered = function () {
	if (Session.get('selectedCompetition').isPredictable) {
		$('a[href="#predict"]').tab('show');
	}
	else {
		$('a[href="#watch"]').tab('show');
	}
}