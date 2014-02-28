Template.fixture.events({
	'click .matchButton': function(e) {
		if (Meteor.user()) {
			var clickedSpan = e.currentTarget;
			var selectedInput = $(clickedSpan).prev();
			if(selectedInput.val()) {
				var prediction = {
					result : selectedInput.val(),
					game: selectedInput.attr('name'),
					event: Session.get('selectedCompetition').url
				};
				Meteor.call(
					'addPrediction',
					prediction,
					function(error, id) {
						if (error)
							Errors.throw(error.reason);
					}
				);
			}
			}
		else {
			Errors.throw("Logi palun sisse");
		}
	}
});