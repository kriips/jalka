Template.header.isActive = function() {
	return Session.equals('selectedCompetition', this._id) ? "active" : "";
}