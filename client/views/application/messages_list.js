Template.messagesList.helpers({
	messages: function() {
		return Messages.find();
	}
});

Template.messagesList.events({
	'submit form': function(e) {
		e.preventDefault();
		var message = {
			author: Meteor.user().emails[0].address,
			message: $(e.target).find('[name=message]').val(),
			timestamp: new Date()
		}
		message._id = Messages.insert(message);
		$(e.target).find('[name=message]').val('');
	}
});