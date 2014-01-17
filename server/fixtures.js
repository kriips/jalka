if (Messages.find().count() === 0) {
	console.log ('inserting sample messages');
	Messages.insert({
		timestamp: '2014-01-01 17:10',
		author: 'Mikk',
		message: 'kõik on hästi'
	});
	Messages.insert({
		timestamp: '2014-01-01 17:11',
		author: 'Mikk',
		message: 'kõik on ikka veel hästi'
	});
}

if (Competitions.find().count() === 0) {
	console.log ('inserting competitions');
	Competitions.insert({
		name: "MM 2014",
		chart: {
			pos1 : {
				place: "1",
				username: "mikk",
				points: "4"
			},
			pos2 : {
				place: "2",
				username: "kriips",
				points: "3"
			}
		}
	});

	Competitions.insert({
		name: "EM 2012",
		chart: {
			pos1: {
				place: "1",
				username: "Erki Heinsaar",
				points: "50"
			},
			pos2: {
				place: "2",
				username: "Sander Lehtmets",
				points: "44"
			},
			pos3: {
				place: "3-4",
				username: "Raul Varul",
				points: "43"
			},
			pos4: {
				place: "3-4",
				username: "Toomas Gross",
				points: "43"
			},
			pos5: {
				place: "5",
				username: "Ott Järvela",
				points: "41"
			},
			pos6: {
				place: "6",
				username: "Mikk Kard",
				points: "40"
			},
			pos7: {
				place: "7-9",
				username: "Madis Raaper",
				points: "39"
			},
			pos8: {
				place: "7-9",
				username: "Martin Häidberg",
				points: "39"
			},
			pos9: {
				place: "7-9",
				username: "Raimo Tropp",
				points: "39"
			},
			pos10: {
				place: "10-11",
				username: "Kaspar Arro",
				points: "37"
			},
			pos11: {
				place: "10-11",
				username: "Tõnn Tiidemann",
				points: "37"
			},
			pos12: {
				place: "12",
				username: "Hendrik Vosman",
				points: "36"
			},
			pos13: {
				place: "13-15",
				username: "Greg Kööp",
				points: "34"
			},
			pos14: {
				place: "13-15",
				username: "Kristjan Kõljalg",
				points: "34"
			},
			pos15: {
				place: "13-15",
				username: "Marko Odamus",
				points: "34"
			},
			pos16: {
				place: "16-18",
				username: "Mihkel Must",
				points: "33"
			},
			pos17: {
				place: "16-18",
				username: "Ragnar Õun",
				points: "33"
			},
			pos18: {
				place: "16-18",
				username: "Toomas Aasmäe",
				points: "33"
			},
			pos19: {
				place: "19-23",
				username: "Conan",
				points: "32"
			},
			pos20: {
				place: "19-23",
				username: "Paul Korrovits",
				points: "32"
			},
			pos21: {
				place: "19-23",
				username: "Mihkel Allik",
				points: "32"
			},
			pos22: {
				place: "19-23",
				username: "Mikk Vainik",
				points: "32"
			},
			pos23: {
				place: "19-23",
				username: "Märt Turk",
				points: "32"
			},
			pos24: {
				place: "24-26",
				username: "Priit Peipman",
				points: "31"
			},
			pos25: {
				place: "24-26",
				username: "Raivo Prank",
				points: "31"
			},
			pos26: {
				place: "24-26",
				username: "Siim Sikk",
				points: "31"
			},
			pos27: {
				place: "27",
				username: "Tanel Molok",
				points: "30"
			},
			pos28: {
				place: "28-29",
				username: "Esper Linask",
				points: "29"
			},
			pos29: {
				place: "28-29",
				username: "Martin Leis",
				points: "29"
			},
			pos30: {
				place: "30-31",
				username: "Koit",
				points: "28"
			},
			pos31: {
				place: "30-31",
				username: "Rene Varul",
				points: "28"
			},
			pos32: {
				place: "32",
				username: "Roger Uusmaa",
				points: "27"
			},
			pos33: {
				place: "33",
				username: "Siim Tiidemann",
				points: "26"
			},
			pos34: {
				place: "34-35",
				username: "Hendrik Kuusk",
				points: "25"
			},
			pos35: {
				place: "34-35",
				username: "Märt Hiietamm",
				points: "25"
			},
			pos36: {
				place: "36-38",
				username: "Henri Sepp",
				points: "24"
			},
			pos37: {
				place: "36-38",
				username: "Mart Soidro",
				points: "24"
			},
			pos38: {
				place: "36-38",
				username: "Siim Valdaru",
				points: "24"
			},
			pos39: {
				place: "39",
				username: "Claude Kaasik",
				points: "23"
			},
			pos40: {
				place: "40",
				username: "Jaak ja Silver",
				points: "22"
			},
			pos41: {
				place: "41-42",
				username: "Kimble",
				points: "20"
			},
			pos42: {
				place: "41-42",
				username: "Veiko Sammelselg",
				points: "20"
			}
		}
	});

	Competitions.insert({
		name: "MM 2010"
	});

	Competitions.insert({
		name: "EM 2008"
	});

	Competitions.insert({
		name: "MM 2006"
	});
}