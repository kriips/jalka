Template.header.isActive = function() {
	return Session.equals('selectedCompetition', this.name) ? "active" : "";
}


Template.header.helpers({
	competitions: function() {
		return Competitions.find();
	}
});