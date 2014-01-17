var defaultCompetition = Competitions.find({name: 'MM 2014'});
Session.set('selectedCompetition', defaultCompetition._id);