Predictions._ensureIndex({event: 1}, {background: true});
Predictions._ensureIndex({event: 1, fixtureId: 1, prediction: 1}, {background: true});
Predictions._ensureIndex({event: 1, userId: 1}, {background: true});
Predictions._ensureIndex({event: 1, fixtureId: 1}, {background: true});
Predictions._ensureIndex({event: 1, userId: 1, fixtureId: 1}, {background: true});
Predictions._ensureIndex({event: 1, userId: 1, stage: 1}, {background: true});
Predictions._ensureIndex({event: 1, userId: 1, key: 1, stage: 1}, {background: true});
Competitions._ensureIndex({url:1}, {background: true});
Messages._ensureIndex({timestamp: 1, event: 1}, {background: true});
if (Competitions.find().count() === 0) {
	console.log('inserting competitions');
	Competitions.insert({
		intro: '<p>Punktiarvestus</p><p class="extra-small">Iga õige alagrupimängu tulemus annab 1p</p><p class="extra-small">Iga õige kaheksandikfinalist 2p</p><p class="extra-small">Iga õige veerandfinalist 3p</p><p class="extra-small">Iga õige poolfinalist 4p</p><p class="extra-small">Iga õige finalist 5p</p><p class="extra-small">Õige võitja 7p</p><p>Makseinfo</p><p class="extra-small">Roland Martin Teras</p><p class="extra-small">a/a 132456789</p>',
		year: "2014",
		name: "MM 2014",
		url: "mm2014",
		maxPredictions: 79,
		chart: [
		],
		messages: [
		],
		playoffs: [
			{
				id: 1,
				score: 7,
				teams: []
			},
			{
				id: 2,
				score: 5,
				teams: []
			},
			{
				id: 3,
				score: 4,
				teams: []
			},
			{
				id: 4,
				score: 3,
				teams: []
			},
			{
				id: 5,
				score: 2,
				teams: []
			}
		],
		fixtures: [
			{
				"id": 1,
				"team1_key": "bra",
				"team1_title": "Brasiilia",
				"team2_key": "cro",
				"team2_title": "Horvaatia",
				"play_at": "2014/06/12",
				"score1": null,
				"score2": null
			},
			{
				"id": 2,
				"team1_key": "mex",
				"team1_title": "Mehhiko",
				"team2_key": "cmr",
				"team2_title": "Kamerun",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 3,
				"team1_key": "esp",
				"team1_title": "Hispaania",
				"team2_key": "ned",
				"team2_title": "Holland",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 4,
				"team1_key": "chi",
				"team1_title": "Tšiili",
				"team2_key": "aus",
				"team2_title": "Austraalia",
				"play_at": "2014/06/13",
				"score1": null,
				"score2": null
			},
			{
				"id": 5,
				"team1_key": "col",
				"team1_title": "Kolumbia",
				"team2_key": "gre",
				"team2_title": "Kreeka",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 6,
				"team1_key": "civ",
				"team1_title": "Côte d'Ivoire",
				"team2_key": "jpn",
				"team2_title": "Jaapan",
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
				"team1_title": "Inglismaa",
				"team2_key": "ita",
				"team2_title": "Itaalia",
				"play_at": "2014/06/14",
				"score1": null,
				"score2": null
			},
			{
				"id": 9,
				"team1_key": "sui",
				"team1_title": "Šveits",
				"team2_key": "ecu",
				"team2_title": "Ecuador",
				"play_at": "2014/06/15",
				"score1": null,
				"score2": null
			},
			{
				"id": 10,
				"team1_key": "fra",
				"team1_title": "Prantsusmaa",
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
				"team2_title": "Bosnia ja H",
				"play_at": "2014/06/15",
				"score1": null,
				"score2": null
			},
			{
				"id": 12,
				"team1_key": "irn",
				"team1_title": "Iraan",
				"team2_key": "nga",
				"team2_title": "Nigeeria",
				"play_at": "2014/06/16",
				"score1": null,
				"score2": null
			},
			{
				"id": 13,
				"team1_key": "ger",
				"team1_title": "Saksamaa",
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
				"team2_title": "USA",
				"play_at": "2014/06/16",
				"score1": null,
				"score2": null
			},
			{
				"id": 15,
				"team1_key": "bel",
				"team1_title": "Belgia",
				"team2_key": "alg",
				"team2_title": "Alžeeria",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 16,
				"team1_key": "rus",
				"team1_title": "Venemaa",
				"team2_key": "kor",
				"team2_title": "Lõuna-Korea",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 17,
				"team1_key": "bra",
				"team1_title": "Brasiilia",
				"team2_key": "mex",
				"team2_title": "Mehhiko",
				"play_at": "2014/06/17",
				"score1": null,
				"score2": null
			},
			{
				"id": 18,
				"team1_key": "cmr",
				"team1_title": "Kamerun",
				"team2_key": "cro",
				"team2_title": "Horvaatia",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 19,
				"team1_key": "esp",
				"team1_title": "Hispaania",
				"team2_key": "chi",
				"team2_title": "Tšiili",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 20,
				"team1_key": "aus",
				"team1_title": "Austraalia",
				"team2_key": "ned",
				"team2_title": "Holland",
				"play_at": "2014/06/18",
				"score1": null,
				"score2": null
			},
			{
				"id": 21,
				"team1_key": "col",
				"team1_title": "Kolumbia",
				"team2_key": "civ",
				"team2_title": "Côte d'Ivoire",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 22,
				"team1_key": "jpn",
				"team1_title": "Jaapan",
				"team2_key": "gre",
				"team2_title": "Kreeka",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 23,
				"team1_key": "uru",
				"team1_title": "Uruguay",
				"team2_key": "eng",
				"team2_title": "Inglismaa",
				"play_at": "2014/06/19",
				"score1": null,
				"score2": null
			},
			{
				"id": 24,
				"team1_key": "ita",
				"team1_title": "Itaalia",
				"team2_key": "crc",
				"team2_title": "Costa Rica",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 25,
				"team1_key": "sui",
				"team1_title": "Šveits",
				"team2_key": "fra",
				"team2_title": "Prantsusmaa",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 26,
				"team1_key": "hon",
				"team1_title": "Honduras",
				"team2_key": "ecu",
				"team2_title": "Ecuador",
				"play_at": "2014/06/20",
				"score1": null,
				"score2": null
			},
			{
				"id": 27,
				"team1_key": "arg",
				"team1_title": "Argentina",
				"team2_key": "irn",
				"team2_title": "Iraan",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 28,
				"team1_key": "nga",
				"team1_title": "Nigeeria",
				"team2_key": "bih",
				"team2_title": "Bosnia ja H",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 29,
				"team1_key": "ger",
				"team1_title": "Saksamaa",
				"team2_key": "gha",
				"team2_title": "Ghana",
				"play_at": "2014/06/21",
				"score1": null,
				"score2": null
			},
			{
				"id": 30,
				"team1_key": "usa",
				"team1_title": "USA",
				"team2_key": "por",
				"team2_title": "Portugal",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 31,
				"team1_key": "bel",
				"team1_title": "Belgia",
				"team2_key": "rus",
				"team2_title": "Venemaa",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 32,
				"team1_key": "kor",
				"team1_title": "Lõuna-Korea",
				"team2_key": "alg",
				"team2_title": "Alžeeria",
				"play_at": "2014/06/22",
				"score1": null,
				"score2": null
			},
			{
				"id": 33,
				"team1_key": "cmr",
				"team1_title": "Kamerun",
				"team2_key": "bra",
				"team2_title": "Brasiilia",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 34,
				"team1_key": "cro",
				"team1_title": "Horvaatia",
				"team2_key": "mex",
				"team2_title": "Mehhiko",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 35,
				"team1_key": "aus",
				"team1_title": "Austraalia",
				"team2_key": "esp",
				"team2_title": "Hispaania",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 36,
				"team1_key": "ned",
				"team1_title": "Holland",
				"team2_key": "chi",
				"team2_title": "Tšiili",
				"play_at": "2014/06/23",
				"score1": null,
				"score2": null
			},
			{
				"id": 37,
				"team1_key": "jpn",
				"team1_title": "Jaapan",
				"team2_key": "col",
				"team2_title": "Kolumbia",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 38,
				"team1_key": "civ",
				"team1_title": "Côte d'Ivoire",
				"team2_key": "gre",
				"team2_title": "Kreeka",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 39,
				"team1_key": "ita",
				"team1_title": "Itaalia",
				"team2_key": "uru",
				"team2_title": "Uruguay",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 40,
				"team1_key": "crc",
				"team1_title": "Costa Rica",
				"team2_key": "eng",
				"team2_title": "Inglismaa",
				"play_at": "2014/06/24",
				"score1": null,
				"score2": null
			},
			{
				"id": 41,
				"team1_key": "hon",
				"team1_title": "Honduras",
				"team2_key": "sui",
				"team2_title": "Šveits",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 42,
				"team1_key": "ecu",
				"team1_title": "Ecuador",
				"team2_key": "fra",
				"team2_title": "Prantsusmaa",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 43,
				"team1_key": "nga",
				"team1_title": "Nigeeria",
				"team2_key": "arg",
				"team2_title": "Argentina",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 44,
				"team1_key": "bih",
				"team1_title": "Bosnia ja H",
				"team2_key": "irn",
				"team2_title": "Iraan",
				"play_at": "2014/06/25",
				"score1": null,
				"score2": null
			},
			{
				"id": 45,
				"team1_key": "usa",
				"team1_title": "USA",
				"team2_key": "ger",
				"team2_title": "Saksamaa",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 46,
				"team1_key": "por",
				"team1_title": "Portugal",
				"team2_key": "gha",
				"team2_title": "Ghana",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 47,
				"team1_key": "kor",
				"team1_title": "Lõuna-Korea",
				"team2_key": "bel",
				"team2_title": "Belgia",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			},
			{
				"id": 48,
				"team1_key": "alg",
				"team1_title": "Alžeeria",
				"team2_key": "rus",
				"team2_title": "Venemaa",
				"play_at": "2014/06/26",
				"score1": null,
				"score2": null
			}
		],
		teams: [
			{
				"key": "gre",
				"title": "Kreeka",
				"code": "GRE"
			},
			{
				"key": "rus",
				"title": "Venemaa",
				"code": "RUS"
			},
			{
				"key": "ned",
				"title": "Holland",
				"code": "NED"
			},
			{
				"key": "ger",
				"title": "Saksamaa",
				"code": "GER"
			},
			{
				"key": "por",
				"title": "Portugal",
				"code": "POR"
			},
			{
				"key": "esp",
				"title": "Hispaania",
				"code": "ESP"
			},
			{
				"key": "ita",
				"title": "Itaalia",
				"code": "ITA"
			},
			{
				"key": "cro",
				"title": "Horvaatia",
				"code": "CRO"
			},
			{
				"key": "fra",
				"title": "Prantsusmaa",
				"code": "FRA"
			},
			{
				"key": "eng",
				"title": "Inglismaa",
				"code": "ENG"
			},
			{
				"key": "sui",
				"title": "Šveits",
				"code": "SUI"
			},
			{
				"key": "bel",
				"title": "Belgia",
				"code": "BEL"
			},
			{
				"key": "bih",
				"title": "Bosnia ja H",
				"code": "BIH"
			},
			{
				"key": "alg",
				"title": "Alžeeria",
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
				"title": "Kamerun",
				"code": "CMR"
			},
			{
				"key": "nga",
				"title": "Nigeeria",
				"code": "NGA"
			},
			{
				"key": "mex",
				"title": "Mehhiko",
				"code": "MEX"
			},
			{
				"key": "usa",
				"title": "USA",
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
				"title": "Brasiilia",
				"code": "BRA"
			},
			{
				"key": "chi",
				"title": "Tšiili",
				"code": "CHI"
			},
			{
				"key": "uru",
				"title": "Uruguay",
				"code": "URU"
			},
			{
				"key": "col",
				"title": "Kolumbia",
				"code": "COL"
			},
			{
				"key": "ecu",
				"title": "Ecuador",
				"code": "ECU"
			},
			{
				"key": "aus",
				"title": "Austraalia",
				"code": "AUS"
			},
			{
				"key": "jpn",
				"title": "Jaapan",
				"code": "JPN"
			},
			{
				"key": "kor",
				"title": "Lõuna-Korea",
				"code": "KOR"
			},
			{
				"key": "irn",
				"title": "Iraan",
				"code": "IRN"
			}
		],
		isActive: true,
		isPredictable: true
	});

	Competitions.insert({
		year: "2012",
		name: "EM 2012",
		url: "em2012",
		chart: {
			latest: [
				{
					place: "1",
					username: "Erki Heinsaar",
					score: "50"
				},
				{
					place: "2",
					username: "Sander Lehtmets",
					score: "44"
				},
				{
					place: "3-4",
					username: "Raul Varul",
					score: "43"
				},
				{
					place: "3-4",
					username: "Toomas Gross",
					score: "43"
				},
				{
					place: "5",
					username: "Ott Järvela",
					score: "41"
				},
				{
					place: "6",
					username: "Mikk Kard",
					score: "40"
				},
				{
					place: "7-9",
					username: "Madis Raaper",
					score: "39"
				},
				{
					place: "7-9",
					username: "Martin Häidberg",
					score: "39"
				},
				{
					place: "7-9",
					username: "Raimo Tropp",
					score: "39"
				},
				{
					place: "10-11",
					username: "Kaspar Arro",
					score: "37"
				},
				{
					place: "10-11",
					username: "Tõnn Tiidemann",
					score: "37"
				},
				{
					place: "12",
					username: "Hendrik Vosman",
					score: "36"
				},
				{
					place: "13-15",
					username: "Greg Kööp",
					score: "34"
				},
				{
					place: "13-15",
					username: "Kristjan Kõljalg",
					score: "34"
				},
				{
					place: "13-15",
					username: "Marko Odamus",
					score: "34"
				},
				{
					place: "16-18",
					username: "Mihkel Must",
					score: "33"
				},
				{
					place: "16-18",
					username: "Ragnar Õun",
					score: "33"
				},
				{
					place: "16-18",
					username: "Toomas Aasmäe",
					score: "33"
				},
				{
					place: "19-23",
					username: "Conan",
					score: "32"
				},
				{
					place: "19-23",
					username: "Paul Korrovits",
					score: "32"
				},
				{
					place: "19-23",
					username: "Mihkel Allik",
					score: "32"
				},
				{
					place: "19-23",
					username: "Mikk Vainik",
					score: "32"
				},
				{
					place: "19-23",
					username: "Märt Turk",
					score: "32"
				},
				{
					place: "24-26",
					username: "Priit Peipman",
					score: "31"
				},
				{
					place: "24-26",
					username: "Raivo Prank",
					score: "31"
				},
				{
					place: "24-26",
					username: "Siim Sikk",
					score: "31"
				},
				{
					place: "27",
					username: "Tanel Molok",
					score: "30"
				},
				{
					place: "28-29",
					username: "Esper Linask",
					score: "29"
				},
				{
					place: "28-29",
					username: "Martin Leis",
					score: "29"
				},
				{
					place: "30-31",
					username: "Koit",
					score: "28"
				},
				{
					place: "30-31",
					username: "Rene Varul",
					score: "28"
				},
				{
					place: "32",
					username: "Roger Uusmaa",
					score: "27"
				},
				{
					place: "33",
					username: "Siim Tiidemann",
					score: "26"
				},
				{
					place: "34-35",
					username: "Hendrik Kuusk",
					score: "25"
				},
				{
					place: "34-35",
					username: "Märt Hiietamm",
					score: "25"
				},
				{
					place: "36-38",
					username: "Henri Sepp",
					score: "24"
				},
				{
					place: "36-38",
					username: "Mart Soidro",
					score: "24"
				},
				{
					place: "36-38",
					username: "Siim Valdaru",
					score: "24"
				},
				{
					place: "39",
					username: "Claude Kaasik",
					score: "23"
				},
				{
					place: "40",
					username: "Jaak ja Silver",
					score: "22"
				},
				{
					place: "41-42",
					username: "Kimble",
					score: "20"
				},
				{
					place: "41-42",
					username: "Veiko Sammelselg",
					score: "20"
				}
			]
		},
		messages: [
		],
		isActive: false,
		isPredictable: false
	});

	Competitions.insert({
		year: "2010",
		name: "MM 2010",
		url: "mm2010",
		isActive: false,
		isPredictable: false,
		chart: {
			latest: [
				{
					place: "1",
					username: 'Mikk Kard',
					score: 99
				},
				{
					place: "2-3",
					username: 'Edvard Garder',
					score: 88
				},
				{
					place: "2-3",
					username: 'Rene Varul',
					score: 88
				},
				{
					place: "4",
					username: 'Jaan Roos',
					score: 86
				},
				{
					place: "5",
					username: 'Ott Järvela',
					score: 84
				},
				{
					place: "6-7",
					username: 'Hans Lõugas',
					score: 81
				},
				{
					place: "6-7",
					username: 'kimble',
					score: 81
				},
				{
					place: "8-9",
					username: 'Martin Leis',
					score: 79
				},
				{
					place: "8-9",
					username: 'Paul Korrovits',
					score: 79
				},
				{
					place: "10-12",
					username: 'Krister Tüllinen',
					score: 77
				},
				{
					place: "10-12",
					username: 'Martin Aadamsoo',
					score: 77
				},
				{
					place: "10-12",
					username: 'Siim Sikk',
					score: 77
				},
				{
					place: "13",
					username: 'Taavi Tuvikene',
					score: 76
				},
				{
					place: "14",
					username: 'Kõige Sagedasem',
					score: 75
				},
				{
					place: "15-17",
					username: 'Allan Kaldoja',
					score: 73
				},
				{
					place: "15-17",
					username: 'Indrek Mihhels',
					score: 73
				},
				{
					place: "15-17",
					username: 'Märt Hiietamm',
					score: 73
				},
				{
					place: "18-19",
					username: 'Esper Linask',
					score: 72
				},
				{
					place: "18-19",
					username: 'Raol Kallas',
					score: 72
				},
				{
					place: "20-22",
					username: 'Juhan Nöps',
					score: 71
				},
				{
					place: "20-22",
					username: 'Roger Uusmaa',
					score: 71
				},
				{
					place: "20-22",
					username: 'Veiko Sammelselg',
					score: 71
				},
				{
					place: "23-25",
					username: 'Maanus Vinni',
					score: 70
				},
				{
					place: "23-25",
					username: 'Martin Häidberg',
					score: 70
				},
				{
					place: "23-25",
					username: 'Sven Tarum',
					score: 70
				},
				{
					place: "26-30",
					username: 'Madis Raaper',
					score: 69
				},
				{
					place: "26-30",
					username: 'Mart Raukas',
					score: 69
				},
				{
					place: "26-30",
					username: 'Siim Tiidemann',
					score: 69
				},
				{
					place: "26-30",
					username: 'Martin Öövel',
					score: 69
				},
				{
					place: "26-30",
					username: 'Raivo Prank',
					score: 69
				},
				{
					place: "31-34",
					username: 'Erki Heinsaar',
					score: 68
				},
				{
					place: "31-34",
					username: 'Mikk Vainik',
					score: 68
				},
				{
					place: "31-34",
					username: 'Priit Peipman',
					score: 68
				},
				{
					place: "31-34",
					username: 'Toomas Gross',
					score: 68
				},
				{
					place: "35-39",
					username: 'Claude Kaasik',
					score: 67
				},
				{
					place: "35-39",
					username: 'Karl-Kristjan Koit',
					score: 67
				},
				{
					place: "35-39",
					username: 'Martin Simmermann',
					score: 67
				},
				{
					place: "35-39",
					username: 'Rainer Randmeri',
					score: 67
				},
				{
					place: "35-39",
					username: 'Toomas Kiho',
					score: 67
				},
				{
					place: "40-42",
					username: 'Henri Sepp',
					score: 66
				},
				{
					place: "40-42",
					username: 'Mart Soidro',
					score: 66
				},
				{
					place: "40-42",
					username: 'Rain Eensaar',
					score: 66
				},
				{
					place: "43",
					username: 'Madis Vodja',
					score: 65
				},
				{
					place: "44-46",
					username: 'Mihkel Allik',
					score: 64
				},
				{
					place: "44-46",
					username: 'Toomas Aasmäe',
					score: 64
				},
				{
					place: "44-46",
					username: 'Valdur Kadakas',
					score: 64
				},
				{
					place: "47",
					username: 'Riho Tamm',
					score: 63
				},
				{
					place: "48",
					username: 'Matti Tarum',
					score: 61
				},
				{
					place: "49",
					username: 'Raul Varul',
					score: 58
				},
				{
					place: "50-51",
					username: 'Kaspar Arro',
					score: 57
				},
				{
					place: "50-51",
					username: 'Tanel Kutti',
					score: 57
				},
				{
					place: "52",
					username: 'Villu Viidul',
					score: 56
				},
				{
					place: "53",
					username: 'Kristjan Teder',
					score: 54
				},
				{
					place: "54",
					username: 'Ragnar Õun',
					score: 52
				}
			]
		}
	});

	Competitions.insert({
		year: "2008",
		name: "EM 2008",
		url: "em2008",
		isActive: false,
		isPredictable: false
	});

	Competitions.insert({
		year: "2006",
		name: "MM 2006",
		url: "mm2006",
		isActive: false,
		isPredictable: false
	});

	console.log('competition count:');
	console.log(Competitions.find().count());
}