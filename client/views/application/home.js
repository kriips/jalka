Template.home.events({
	'click .nav-pills': function(e) {
//		e.preventDefault();
		var target = $(e.target);
		target.closest('li').addClass('active');
		target.tab('show');
		console.log(target.html());
	}
});

Template.home.rendered = function () {
	console.log('home rendered');
	if (Session.get('selectedCompetition').isPredictable) {
		$('a[href="#predict"]').tab('show');
	}
	else {
		$('a[href="#watch"]').tab('show');
	}
}