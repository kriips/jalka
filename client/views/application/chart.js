Template.chart.allUsers = function () {
	var users = Meteor.users.find({});
	return users;
};

Template.user.currentUser = function () {
	return this.username === Meteor.user().username;
};

Template.user.onlineUser = function () {
	var user = Meteor.users.findOne({username: this.username});
	if (user)
		return user.status.online;
	else
		return false;
};

Template.user.rendered = function () {
	renderChart();
}

Template.chart.created = function () {
	if (!Session.get('chartSelectedUser')) {
		Session.set('chartSelectedUser', Meteor.user()._id);
	}
}

renderChart = function (data) {
	//Get the context of the canvas element we want to select
	var ctx = document.getElementById("userChart").getContext("2d");
	var userChart = new Chart(ctx).Line(getChartData(), {
		scaleOverride: true,
		scaleSteps: Session.get('selectedCompetition').participants.length + 1 ,
		scaleStepWidth: 1,
		scaleStartValue: 0,
		bezierCurve: false
	});
}

getChartData = function () {
	var chartData = {};
	chartData.labels = new Array();
	chartData.datasets = new Array();
	chartData.datasets.push({
		fillColor : "rgba(220,220,220,0.5)",
		strokeColor : "rgba(220,220,220,1)",
		pointColor : "rgba(220,220,220,1)",
		pointStrokeColor : "#fff"
	});
	chartData.datasets[0].data = new Array();
	Session.get('selectedCompetition').chart.group.forEach(function(game, index) {
		if (game !== null) {
			chartData.labels.push(index.toString());
			game.forEach(function (row) {
				if (row.userId === Session.get('chartSelectedUser')) {
					chartData.datasets[0].data.push(row.place);
				}
			})
		}
	});
	console.log(chartData);
	return chartData;
}

getChartOptions = function () {
	return {};
}

$('.results').on('change', 'input:radio', function(e){
	if (Meteor.user()) {
		var radio = $(e.target);
		if (radio.attr('name').indexOf('chart') !== -1) {
			Session.set('chartSelectedUser', radio.attr('id'));
		}
	}
	else {
		Errors.throw("Logi palun sisse");
	}
});