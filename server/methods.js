Meteor.methods({
	tokenLogin: function (token) {
		if (token) {
			var result = HTTP.post('https://www.eys.ee/jalka/verifyToken.php', {
				params: {
					token: token
				},
				auth: 'Mikk Kard:a5mutiilminu'
			});
			console.log ('http post result: ');
			console.log(result);
			if (result.content == 'false') {
				return false;
			}
			else {
				//manually log in
				var username = result.content;
				if (Meteor.users.findOne({username: username})) {
					console.log('returning: ' + username);
					return username;
				} else {
					Accounts.createUser({
						username: username,
						password: username.replace(' ', '')
					});
					console.log('returning: ' + username);
					return username;
				}
			}

		}
	}

});