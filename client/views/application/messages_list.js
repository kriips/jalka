Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	}
});

Template.messagesList.events({
	'submit form': function(e) {
		e.preventDefault();

		if (Meteor.user()) {
			var message = {
				message: $(e.target).find('[name=message]').val()
			}
			Meteor.call('addMessage', message, function(error, id) {
				if (error)
					Errors.throw(error.reason);
			});
			$(e.target).find('[name=message]').val('');
		}
		else {
			Errors.throw("Logi palun sisse");
		}
	}
});