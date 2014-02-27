if (Competitions.find().count() === 0) {
	console.log ('inserting competitions');
	Competitions.insert({
		name: "MM 2014",
		url: "mm2014",
		chart: [
			{
				place: "1",
				username: "mikk",
				points: "4"
			},
			{
				place: "2",
				username: "kriips",
				points: "3"
			}
		],
		messages: [
			{
				timestamp: '2014-01-01 17:10',
				author: 'Mikk',
				message: 'kõik on hästi'
			},
			{
				timestamp: '2014-01-01 17:11',
				author: 'Mikk',
				message: 'kõik on ikka veel hästi'
			}
		]
	});

	Competitions.insert({
		name: "EM 2012",
		url: "em2012",
		chart: [
			{
				place: "1",
				username: "Erki Heinsaar",
				points: "50"
			},
			{
				place: "2",
				username: "Sander Lehtmets",
				points: "44"
			},
			{
				place: "3-4",
				username: "Raul Varul",
				points: "43"
			},
			{
				place: "3-4",
				username: "Toomas Gross",
				points: "43"
			},
			{
				place: "5",
				username: "Ott Järvela",
				points: "41"
			},
			{
				place: "6",
				username: "Mikk Kard",
				points: "40"
			},
			{
				place: "7-9",
				username: "Madis Raaper",
				points: "39"
			},
			{
				place: "7-9",
				username: "Martin Häidberg",
				points: "39"
			},
			{
				place: "7-9",
				username: "Raimo Tropp",
				points: "39"
			},
			{
				place: "10-11",
				username: "Kaspar Arro",
				points: "37"
			},
			{
				place: "10-11",
				username: "Tõnn Tiidemann",
				points: "37"
			},
			{
				place: "12",
				username: "Hendrik Vosman",
				points: "36"
			},
			{
				place: "13-15",
				username: "Greg Kööp",
				points: "34"
			},
			{
				place: "13-15",
				username: "Kristjan Kõljalg",
				points: "34"
			},
			{
				place: "13-15",
				username: "Marko Odamus",
				points: "34"
			},
			{
				place: "16-18",
				username: "Mihkel Must",
				points: "33"
			},
			{
				place: "16-18",
				username: "Ragnar Õun",
				points: "33"
			},
			{
				place: "16-18",
				username: "Toomas Aasmäe",
				points: "33"
			},
			{
				place: "19-23",
				username: "Conan",
				points: "32"
			},
			{
				place: "19-23",
				username: "Paul Korrovits",
				points: "32"
			},
			{
				place: "19-23",
				username: "Mihkel Allik",
				points: "32"
			},
			{
				place: "19-23",
				username: "Mikk Vainik",
				points: "32"
			},
			{
				place: "19-23",
				username: "Märt Turk",
				points: "32"
			},
			{
				place: "24-26",
				username: "Priit Peipman",
				points: "31"
			},
			{
				place: "24-26",
				username: "Raivo Prank",
				points: "31"
			},
			{
				place: "24-26",
				username: "Siim Sikk",
				points: "31"
			},
			{
				place: "27",
				username: "Tanel Molok",
				points: "30"
			},
			{
				place: "28-29",
				username: "Esper Linask",
				points: "29"
			},
			{
				place: "28-29",
				username: "Martin Leis",
				points: "29"
			},
			{
				place: "30-31",
				username: "Koit",
				points: "28"
			},
			{
				place: "30-31",
				username: "Rene Varul",
				points: "28"
			},
			{
				place: "32",
				username: "Roger Uusmaa",
				points: "27"
			},
			{
				place: "33",
				username: "Siim Tiidemann",
				points: "26"
			},
			{
				place: "34-35",
				username: "Hendrik Kuusk",
				points: "25"
			},
			{
				place: "34-35",
				username: "Märt Hiietamm",
				points: "25"
			},
			{
				place: "36-38",
				username: "Henri Sepp",
				points: "24"
			},
			{
				place: "36-38",
				username: "Mart Soidro",
				points: "24"
			},
			{
				place: "36-38",
				username: "Siim Valdaru",
				points: "24"
			},
			{
				place: "39",
				username: "Claude Kaasik",
				points: "23"
			},
			{
				place: "40",
				username: "Jaak ja Silver",
				points: "22"
			},
			{
				place: "41-42",
				username: "Kimble",
				points: "20"
			},
			{
				place: "41-42",
				username: "Veiko Sammelselg",
				points: "20"
			}
		],
		messages: [
			{
				timestamp: '2012-01-01 17:10',
				author: 'Mikk',
				message: 'kõik on hästi em'
			},
			{
				timestamp: '2012-01-01 17:11',
				author: 'Mikk',
				message: 'kõik on ikka veel hästi em'
			}
		]
	});

	Competitions.insert({
		name: "MM 2010",
		url: "mm2010"
	});

	Competitions.insert({
		name: "EM 2008",
		url: "em2008"
	});

	Competitions.insert({
		name: "MM 2006",
		url: "mm2006"
	});
}