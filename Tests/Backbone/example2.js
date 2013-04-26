$(function() {

	Logs = Backbone.Model.extend({

		//urlRoot: 'https://wwws.appfirst.com/api/v3/logs/',

		defaults: {
			server_uri: ''
		}
	});
	
	var logs = new Logs();
	
	LogsCollection = Backbone.Collection.extend({
		defaults: {
			response: ''
		},
	
		model: Logs,
		
		url:'https://wwws.appfirst.com/api/v3/logs/',
		
		parse: function (response) {
			this.response=response;
		}
	});
	
	var logcol = new LogsCollection();
	/*logcol.fetch({
			success: function (logs){
			$.each(logs.toJSON(), function(i, log) {
				console.log(log);
			});
		}
	});*/

	AppView = Backbone.View.extend({
		el: $('#container'),
	
		/*events: {
			'dblclick label': 'edit',
			'keypress .edit': 'updateOnEnter',
			'blur .edit':   'close'
		},*/

		initialize: function(){
			this.collection.bind("reset", _.bind(this.render, this));
			var self = this;
			this.collection.fetch({
				success: function (logs){
					/*$.each(logs.toJSON(), function(i, log) {
						//console.log(log);
					});*/
				}
			});
			
		},

		render: function(){
			var logVar = {
					responses: this.collection.response
			};
			var template = _.template( $("#log-template").html(), logVar );
			this.el.html(template);//(this.collection.toJSON()));
			console.log(this.collection.response[0].server_uri);
			//alert("BLAH");	
		}
	});

	var appview = new AppView({collection: logcol});
});