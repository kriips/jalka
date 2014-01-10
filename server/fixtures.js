if (Messages.find().count() === 0) {
	Messages.insert({
		author: 'Mikk Test 1',
		message: 'kõik on hästi'
	});
	Messages.insert({
		author: 'Mikk Test 2',
		message: 'kõik on ikka veel hästi'
	});
}