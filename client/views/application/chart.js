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
	if (!Session.get('chartSelectedUser')) {
		var selectUser = {};
		Session.get('selectedCompetition').chart.latest.forEach(function (user, index) {
			if (!index) {
				selectUser = user;
			}
			if (user.userId = Meteor.user()._id) {
				selectUser = user;
			}
		});
		console.log(selectUser);
		Session.set('chartSelectedUser', {
			userId: selectUser.userId,
			username: selectUser.username
		});
	}
}

Template.chart.rendered = function () {
	$('.results').on('change', 'input:radio', function (e) {
		if (Meteor.user()) {
			var radio = $(e.target);
			if (radio.attr('name').indexOf('chart') !== -1) {
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
		if (Session.get('selectedCompetition').chart.group) {
			renderChart();
		}
	});
}

Template.chart.helpers({
	'resultsAdded': function () {
		return Session.get('selectedCompetition').chart.group ? Session.get('selectedCompetition').chart.group.length > 0 : false;
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
				success : success
			});
		});
		return returnValues;
	},
	'selectedUsername': function () {
		console.log('returning selected username');
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
			scaleSteps: Session.get('selectedCompetition').participants.length + 1,
			scaleStepWidth: 1,
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
		var stageLabels = ['', '1/16', '1/8', '1/4', '1/2', 'F'];
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

