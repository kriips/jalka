Template.chart.allUsers = function() {
	var users =  Meteor.users.find({});
	return users;
};

Template.user.currentUser = function() {
	return this.username === Meteor.user().username;
};

Template.user.onlineUser = function() {
	var user = Meteor.users.findOne({username: this.username});
	if (user)
		return user.status.online;
	else
		return false;
};

Template.user.rendered = function() {
	renderChart();
}

renderChart = function(data) {
	console.log('doing the chart');
	$('#resultChart').dxChart({
		dataSource: data,
		commonSeriesSettings: {
			argumentField: "year"
		},
		series: [
			{ valueField: "europe", name: "Europe" },
			{ valueField: "americas", name: "Americas" },
			{ valueField: "africa", name: "Africa" }
		],
		argumentAxis:{
			grid:{
				visible: true
			}
		},
		tooltip:{
			enabled: true
		},
		title: "Historic, Current and Future Population",
		legend: {
			verticalAlignment: "bottom",
			horizontalAlignment: "center"
		},
		commonPaneSettings: {
			border:{
				visible: true,
				right: false
			}
		}
	});
}

getChartData = function (userId) {
	return [
	{ year: 1950, europe: 546, americas: 332, africa: 227 },
	{ year: 1960, europe: 605, americas: 417, africa: 283 },
	{ year: 1970, europe: 656, americas: 513, africa: 361 },
	{ year: 1980, europe: 694, americas: 614, africa: 471 },
	{ year: 1990, europe: 721, americas: 721, africa: 623 },
	{ year: 2000, europe: 730, americas: 836, africa: 797 },
	{ year: 2010, europe: 728, americas: 935, africa: 982 },
	{ year: 2020, europe: 721, americas: 1027, africa: 1189 },
	{ year: 2030, europe: 704, americas: 1110, africa: 1416 },
	{ year: 2040, europe: 680, americas: 1178, africa: 1665 },
	{ year: 2050, europe: 650, americas: 1231, africa: 1937 }
	];

}

getChartOptions = function () {
	return {};
}