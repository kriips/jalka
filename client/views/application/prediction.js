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
					console.log('prediction added');
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

Template.fixture.helpers({
	isSelected: function(key) {
		console.log('calling is selected: ' + key);
		var prediction = Predictions.findOne({userId: Meteor.userId(), fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url});
		if (prediction) {
			var result = (key == prediction.prediction);
			return key == prediction.prediction ? 'active': '';
		}
		else {
			return '';
		}
	},
	countPredictions: function(key) {
		var predictions = Predictions.find({fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url, prediction: key});
		return predictions.count();
	}
});
