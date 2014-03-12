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
		}
		else {
			Errors.throw("Logi palun sisse");
		}
	});

	$(document.body).on('change.playoffCheckboxes', 'input:checkbox', function(e){
		if (Meteor.user()) {
			var checkbox = $(e.target);
			var stage = checkbox.closest('.btn-group');
			stage = stage.attr('name');
			if (checkbox.val() === 'on') {
				var prediction = {
					stage: stage[stage.length-1] - 1,
					team: checkbox.attr('name'),
					event: Session.get('selectedCompetition').url
				};
				console.log(prediction);
				Meteor.call(
					'addPrediction',
					prediction,
					function(error, id) {
						if (error)
							Errors.throw(error.reason);
					}
				);
			}
			else {
				// todo: remove prediction
			}
		}
		else {
			Errors.throw("Logi palun sisse");
		}
	});
}

Template.prediction.destroyed = function(){
	$(document.body).off('.fixtureRadios');
}

Template.fixture.helpers({
	isSelected: function(key) {
		var prediction = Predictions.findOne({userId: Meteor.userId(), fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url});
		var returnVal = '';
		if (prediction) {
			var result = (key == prediction.prediction);
			returnVal = key == prediction.prediction ? 'active': '';
		}

		return returnVal;
	},

	countPredictions: function(key) {
		var predictions = Predictions.find({fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url, prediction: key});
		return predictions.count();
	},

	playoffStage: function(stage) {
		var teams = Predictions.find({userId: Meteor.userId(), stage: stage, event: Session.get('selectedCompetition').url});
		console.log(teams);
		return teams;
	}
});

