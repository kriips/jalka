if (Competitions.find().count() === 0) {
	console.log ('inserting competitions');
	Competitions.insert({
		year: "2014",
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
				timestamp: '2014-01-01 17:10:40',
				author: 'Mikk',
				message: 'kõik on hästi'
			},
			{
				timestamp: '2014-01-01 17:11:20',
				author: 'Mikk',
				message: 'kõik on ikka veel hästi'
			}
		],
		fixtures: [
			{
				"id": 1,
				"team1_key": "bra",
				"team1_title": "Brazil",
				"team2_key": "cro",
				"team2_title": "Croatia",
				"play_at": "2014/06/12",
				"score1": null,
				"score2": null
			},
			{
				"id": 2,
				"team1_key": "mex",
				"team1_title": "Mexico",
				"team2_key": "cmr",
				"team2_title": "Cameroon",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 3,
				"team1_key": "esp",
				"team1_title": "Spain",
				"team2_key": "ned",
				"team2_title": "Netherlands",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 4,
				"team1_key": "chi",
				"team1_title": "Chile",
				"team2_key": "aus",
				"team2_title": "Australia",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 5,
				"team1_key": "col",
				"team1_title": "Colombia",
				"team2_key": "gre",
				"team2_title": "Greece",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 6,
				"team1_key": "civ",
				"team1_title": "Côte d'Ivoire",
				"team2_key": "jpn",
				"team2_title": "Japan",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 7,
				"team1_key": "uru",
				"team1_title": "Uruguay",
				"team2_key": "crc",
				"team2_title": "Costa Rica",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 8,
				"team1_key": "eng",
				"team1_title": "England",
				"team2_key": "ita",
				"team2_title": "Italy",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 9,
				"team1_key": "sui",
				"team1_title": "Switzerland",
				"team2_key": "ecu",
				"team2_title": "Ecuador",
				"play_at": "2014/06/15",
				"score1": null,
				"score2": null
			},
			{
				"id": 10,
				"team1_key": "fra",
				"team1_title": "France",
				"team2_key": "hon",
				"team2_title": "Honduras",
				"play_at": "2014/06/15",
				"score1": null,
				"score2": null
			},
			{
				"id": 11,
				"team1_key": "arg",
				"team1_title": "Argentina",
				"team2_key": "bih",
				"team2_title": "Bosnia-Herz.",
				"play_at": "2014/06/15",
				"score1": null,
				"score2": null
			},
			{
				"id": 12,
				"team1_key": "irn",
				"team1_title": "Iran",
				"team2_key": "nga",
				"team2_title": "Nigeria",
				"play_at": "2014/06/16",
				"score1": null,
				"score2": null
			},
			{
				"id": 13,
				"team1_key": "ger",
				"team1_title": "Germany",
				"team2_key": "por",
				"team2_title": "Portugal",
				"play_at": "2014/06/16",
				"score1": null,
				"score2": null
			},
			{
				"id": 14,
				"team1_key": "gha",
				"team1_title": "Ghana",
				"team2_key": "usa",
				"team2_title": "United States",
				"play_at": "2014/06/16",
				"score1": null,
				"score2": null
			},
			{
				"id": 15,
				"team1_key": "bel",
				"team1_title": "Belgium",
				"team2_key": "alg",
				"team2_title": "Algeria",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 16,
				"team1_key": "rus",
				"team1_title": "Russia",
				"team2_key": "kor",
				"team2_title": "South Korea",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 17,
				"team1_key": "bra",
				"team1_title": "Brazil",
				"team2_key": "mex",
				"team2_title": "Mexico",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 18,
				"team1_key": "cmr",
				"team1_title": "Cameroon",
				"team2_key": "cro",
				"team2_title": "Croatia",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 17,
				"team1_key": "esp",
				"team1_title": "Spain",
				"team2_key": "chi",
				"team2_title": "Chile",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 18,
				"team1_key": "aus",
				"team1_title": "Australia",
				"team2_key": "ned",
				"team2_title": "Netherlands",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 19,
				"team1_key": "col",
				"team1_title": "Colombia",
				"team2_key": "civ",
				"team2_title": "Côte d'Ivoire",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 20,
				"team1_key": "jpn",
				"team1_title": "Japan",
				"team2_key": "gre",
				"team2_title": "Greece",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 21,
				"team1_key": "uru",
				"team1_title": "Uruguay",
				"team2_key": "eng",
				"team2_title": "England",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 22,
				"team1_key": "ita",
				"team1_title": "Italy",
				"team2_key": "crc",
				"team2_title": "Costa Rica",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 23,
				"team1_key": "sui",
				"team1_title": "Switzerland",
				"team2_key": "fra",
				"team2_title": "France",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 24,
				"team1_key": "hon",
				"team1_title": "Honduras",
				"team2_key": "ecu",
				"team2_title": "Ecuador",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 25,
				"team1_key": "arg",
				"team1_title": "Argentina",
				"team2_key": "irn",
				"team2_title": "Iran",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 26,
				"team1_key": "nga",
				"team1_title": "Nigeria",
				"team2_key": "bih",
				"team2_title": "Bosnia-Herz.",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 27,
				"team1_key": "ger",
				"team1_title": "Germany",
				"team2_key": "gha",
				"team2_title": "Ghana",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 28,
				"team1_key": "usa",
				"team1_title": "United States",
				"team2_key": "por",
				"team2_title": "Portugal",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 29,
				"team1_key": "bel",
				"team1_title": "Belgium",
				"team2_key": "rus",
				"team2_title": "Russia",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 30,
				"team1_key": "kor",
				"team1_title": "South Korea",
				"team2_key": "alg",
				"team2_title": "Algeria",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 31,
				"team1_key": "cmr",
				"team1_title": "Cameroon",
				"team2_key": "bra",
				"team2_title": "Brazil",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 32,
				"team1_key": "cro",
				"team1_title": "Croatia",
				"team2_key": "mex",
				"team2_title": "Mexico",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 33,
				"team1_key": "aus",
				"team1_title": "Australia",
				"team2_key": "esp",
				"team2_title": "Spain",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 34,
				"team1_key": "ned",
				"team1_title": "Netherlands",
				"team2_key": "chi",
				"team2_title": "Chile",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 35,
				"team1_key": "jpn",
				"team1_title": "Japan",
				"team2_key": "col",
				"team2_title": "Colombia",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 36,
				"team1_key": "civ",
				"team1_title": "Côte d'Ivoire",
				"team2_key": "gre",
				"team2_title": "Greece",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 37,
				"team1_key": "ita",
				"team1_title": "Italy",
				"team2_key": "uru",
				"team2_title": "Uruguay",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 38,
				"team1_key": "crc",
				"team1_title": "Costa Rica",
				"team2_key": "eng",
				"team2_title": "England",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 39,
				"team1_key": "hon",
				"team1_title": "Honduras",
				"team2_key": "sui",
				"team2_title": "Switzerland",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 40,
				"team1_key": "ecu",
				"team1_title": "Ecuador",
				"team2_key": "fra",
				"team2_title": "France",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 41,
				"team1_key": "nga",
				"team1_title": "Nigeria",
				"team2_key": "arg",
				"team2_title": "Argentina",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 42,
				"team1_key": "bih",
				"team1_title": "Bosnia-Herz.",
				"team2_key": "irn",
				"team2_title": "Iran",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 43,
				"team1_key": "usa",
				"team1_title": "United States",
				"team2_key": "ger",
				"team2_title": "Germany",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 44,
				"team1_key": "por",
				"team1_title": "Portugal",
				"team2_key": "gha",
				"team2_title": "Ghana",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 45,
				"team1_key": "kor",
				"team1_title": "South Korea",
				"team2_key": "bel",
				"team2_title": "Belgium",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 46,
				"team1_key": "alg",
				"team1_title": "Algeria",
				"team2_key": "rus",
				"team2_title": "Russia",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			}
		],
		teams: [
			{
				"key": "gre",
				"title": "Greece",
				"code": "GRE"
			},
			{
				"key": "rus",
				"title": "Russia",
				"code": "RUS"
			},
			{
				"key": "ned",
				"title": "Netherlands",
				"code": "NED"
			},
			{
				"key": "ger",
				"title": "Germany",
				"code": "GER"
			},
			{
				"key": "por",
				"title": "Portugal",
				"code": "POR"
			},
			{
				"key": "esp",
				"title": "Spain",
				"code": "ESP"
			},
			{
				"key": "ita",
				"title": "Italy",
				"code": "ITA"
			},
			{
				"key": "cro",
				"title": "Croatia",
				"code": "CRO"
			},
			{
				"key": "fra",
				"title": "France",
				"code": "FRA"
			},
			{
				"key": "eng",
				"title": "England",
				"code": "ENG"
			},
			{
				"key": "sui",
				"title": "Switzerland",
				"code": "SUI"
			},
			{
				"key": "bel",
				"title": "Belgium",
				"code": "BEL"
			},
			{
				"key": "bih",
				"title": "Bosnia-Herz.",
				"code": "BIH"
			},
			{
				"key": "alg",
				"title": "Algeria",
				"code": "ALG"
			},
			{
				"key": "civ",
				"title": "Côte d'Ivoire",
				"code": "CIV"
			},
			{
				"key": "gha",
				"title": "Ghana",
				"code": "GHA"
			},
			{
				"key": "cmr",
				"title": "Cameroon",
				"code": "CMR"
			},
			{
				"key": "nga",
				"title": "Nigeria",
				"code": "NGA"
			},
			{
				"key": "mex",
				"title": "Mexico",
				"code": "MEX"
			},
			{
				"key": "usa",
				"title": "United States",
				"code": "USA"
			},
			{
				"key": "hon",
				"title": "Honduras",
				"code": "HON"
			},
			{
				"key": "crc",
				"title": "Costa Rica",
				"code": "CRC"
			},
			{
				"key": "arg",
				"title": "Argentina",
				"code": "ARG"
			},
			{
				"key": "bra",
				"title": "Brazil",
				"code": "BRA"
			},
			{
				"key": "chi",
				"title": "Chile",
				"code": "CHI"
			},
			{
				"key": "uru",
				"title": "Uruguay",
				"code": "URU"
			},
			{
				"key": "col",
				"title": "Colombia",
				"code": "COL"
			},
			{
				"key": "ecu",
				"title": "Ecuador",
				"code": "ECU"
			},
			{
				"key": "aus",
				"title": "Australia",
				"code": "AUS"
			},
			{
				"key": "jpn",
				"title": "Japan",
				"code": "JPN"
			},
			{
				"key": "kor",
				"title": "South Korea",
				"code": "KOR"
			},
			{
				"key": "irn",
				"title": "Iran",
				"code": "IRN"
			}
		]
		,
		isActive: 'yes'
	});

	Competitions.insert({
		year: "2012",
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
		],
		isActive: 'no'
	});

	Competitions.insert({
		year: "2010",
		name: "MM 2010",
		url: "mm2010",
		isActive: 'no'
	});

	Competitions.insert({
		year: "2008",
		name: "EM 2008",
		url: "em2008",
		isActive: 'no'
	});

	Competitions.insert({
		year: "2006",
		name: "MM 2006",
		url: "mm2006",
		isActive: 'no'
	});
}