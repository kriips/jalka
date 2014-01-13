if (Messages.find().count() === 0) {
	Messages.insert({
		timestamp: '2014-01-01 17:10',
		author: 'Mikk Test 1',
		message: 'kõik on hästi'
	});
	Messages.insert({
		timestamp: '2014-01-01 17:11',
		author: 'Mikk Test 2',
		message: 'kõik on ikka veel hästi'
	});
}