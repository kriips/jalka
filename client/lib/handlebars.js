//  format an ISO date using Moment.js
//  http://momentjs.com/
//  moment syntax example: moment(Date("2011-07-18T15:50:52")).format("MMMM YYYY")
//  usage: {{dateFormat creation_date format="MMMM YYYY"}}
Handlebars.registerHelper('dateFormat', function(context, block) {
	if (window.moment) {
		var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
		return moment(context).add('hours', 3).format(f); //had to remove Date(context)
	}else{
		return context;   //  moment plugin not available. return data as is.
	};
});

// {{#loop 12}}
//   <output>
// {{/loop}}
Handlebars.registerHelper('loop', function(count, options) {
	var out = "";

	while (count--) {
		out+= options.fn();
	}

	return out;
});