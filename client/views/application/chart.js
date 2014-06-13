Template.chart.allUsers = function () {
	var users = Meteor.users.find({});
	return users;
}

Template.user.currentUser = function () {
	return Meteor.user() ? this.username === Meteor.user().username : '';
}

Template.user.onlineUser = function () {
	var user = Meteor.users.findOne({username: this.username});
	if (user)
		return user.status.online;
	else
		return false;
}

Template.chart.created = function () {
	if (!Session.get('chartSelectedUser') && Session.get('selectedCompetition').chart.latest) {
		var selectUser = {};
		Session.get('selectedCompetition').chart.latest.forEach(function (user, index) {
			if (!index) {
				selectUser = user;
			}
			if (user.userId == Meteor.user()._id) {
				selectUser = user;
			}
		});
		Session.set('chartSelectedUser', {
			userId: selectUser.userId,
			username: selectUser.username
		});
	}
}

Template.chart.rendered = function () {
	$('.results').on('change', 'input:radio', function (e) {
//		Session.set('chartLoading', true);
		if (Meteor.user()) {
			var radio = $(e.target);
			if (radio.attr('name').indexOf('chart') !== -1) {
				var competition = Session.get('selectedCompetition');
//				Meteor.subscribe('predictions', {event: competition.url, userId: radio.attr('userId')}, function () {
//					Session.set('chartLoading', false);
//				});
				Session.set('chartSelectedUser', {
					userId: radio.attr('userId'),
					username: radio.attr('username')
				});
			}
		}
		else {
			Errors.throw("Logi palun sisse");
		}
	});
	Deps.autorun(function () {
		if (Session.get('selectedCompetition').chart && Session.get('selectedCompetition').chart.group) {
			renderChart();
		}
	});
}

Template.user.helpers({
	'isUserSelected': function () {
		return this.userId === Session.get('chartSelectedUser').userId ? 'active' : '';
	}
});

Template.chart.helpers({
	'resultsAdded': function () {
		return Session.get('selectedCompetition').chart && Session.get('selectedCompetition').chart.group ? Session.get('selectedCompetition').chart.group.length > 0 : false;
	},
	'predictionsAdded': function () {
		return Session.get('selectedCompetition').participants ? Session.get('selectedCompetition').participants.length > 0 : false;
	},
	'chartLoading': function () {
		return Session.get('chartLoading');
	}
});

Template.chartPredictionRow.helpers({
	'chartPredictionColor': function (key) {
		var prediction = Predictions.findOne({userId: Session.get('chartSelectedUser').userId, fixtureId: 'fixture_' + this.id, event: Session.get('selectedCompetition').url});
		if (prediction) {
			if (this.result && key == prediction.prediction) {
				return this.result == prediction.prediction ? 'lightGreen' : 'lightRed';
			}
			else {
				return key == prediction.prediction ? 'lightGray' : '';
			}
		}
	}
});

Template.chartPredictionRow.events({
	'click .predictionButton': function (e) {
		e.preventDefault();
		var button = $(e.target);
		var fixture = button.attr('fixture');
		fixture = 'fixture_' + fixture;
		var key = button.attr('key');
		var competition = Session.get('selectedCompetition');
		var namelist = new Array();
		var predictions = Predictions.find({event : competition.url, fixtureId: fixture, prediction: key});
		predictions.forEach(function(prediction) {
			var user = Meteor.users.findOne({_id: prediction.userId});
			namelist.push(user.username);
		});
		namelist = jQuery.unique(namelist);
		var nameString = '';
		namelist.forEach(function(name) {
			nameString += '<p>' + name + '</p>';
		});
		button.popover({
			html: true,
			content: nameString,
			container: 'body',
			placement: 'auto'
		});
		button.popover('show');
	}
});

Template.chartPredictions.helpers({
	'currentPlayoffPredictions': function (stage) {
		var predictions = Predictions.find({userId: Session.get('chartSelectedUser').userId, stage: stage, event: Session.get('selectedCompetition').url});
		var returnValues = new Array();
		predictions.forEach(function (prediction) {
			var success = false;
			Session.get('selectedCompetition').playoffs[stage - 1].teams.forEach(function (team) {
				if (team.key == prediction.key) {
					success = true;
				}
			});
			returnValues.push({
				key: prediction.key,
				success: success
			});
		});
		return returnValues;
	},
	'selectedUsername': function () {
		return Session.get('chartSelectedUser').username;
	}
});

renderChart = function (data) {
	//Get the context of the canvas element we want to select
	var chartSelector = document.getElementById("userChart");
	if (chartSelector) {
		var ctx = chartSelector.getContext("2d");
		var userChart = new Chart(ctx).Line(getChartData(), {
			scaleOverride: true,
			scaleSteps: (Session.get('selectedCompetition').participants.length + 1) / 5,
			scaleStepWidth: 5,
			scaleStartValue: 0,
			bezierCurve: false
		});
		fitToContainer(chartSelector);
	}
}

getChartData = function () {
	var chartData = {};
	chartData.labels = new Array();
	chartData.datasets = new Array();
	chartData.datasets.push({
		fillColor: "rgba(220,220,220,0.5)",
		strokeColor: "rgba(220,220,220,1)",
		pointColor: "rgba(220,220,220,1)",
		pointStrokeColor: "#fff"
	});
	chartData.datasets[0].data = new Array();
	if (Session.get('selectedCompetition').chart.group) {
		Session.get('selectedCompetition').chart.group.forEach(function (game, index) {
			if (game !== null) {
				chartData.labels.push(index.toString());
				game.forEach(function (row) {
					if (row.userId === Session.get('chartSelectedUser').userId) {
						chartData.datasets[0].data.push(row.place);
					}
				})
			}
		});
	}
	if (Session.get('selectedCompetition').chart.playoffs) {
		var stageLabels = ['', 'F', '1/2', '1/4', '1/8', '1/16'];
		Session.get('selectedCompetition').chart.playoffs.forEach(function (game, index) {
			if (game !== null) {
				chartData.labels.push(stageLabels[index]);
				game.forEach(function (row) {
					if (row.userId === Session.get('chartSelectedUser').userId) {
						chartData.datasets[0].data.push(row.place);
					}
				})
			}
		});
	}
	return chartData;
}

getChartOptions = function () {
	return {

	};
}

fitToContainer = function (canvas) {
	canvas.style.width = '100%';
	canvas.style.height = '100%';
	canvas.width = $('.canvas').innerWidth();
	canvas.height = $('.canvas').innerHeight();
}

