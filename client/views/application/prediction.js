Template.prediction.created = function() {
	$(document.body).on('change.fixtureRadios', 'input:radio', function(e){
		if (Meteor.user()) {
			var radio = $(e.target);
			var prediction = {
				result : radio.val(),
				game: radio.attr('name'),
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
			console.log(prediction);
		}
		else {
			Errors.throw("Logi palun sisse");
		}
	});
}

Template.prediction.destroyed = function(){
	// remove all event handlers in the namespace `.tplquestions`
	$(document.body).off('.fixtureRadios');
}