$(function() {

	Logs = Backbone.Model.extend({

		//urlRoot: 'https://wwws.appfirst.com/api/v3/logs/',

		defaults: {
			server_uri: ''
		}
	});

	//var logs = new Logs();

	/*logs.fetch({
		success: function (logs){
			logs.set({server_uri: logs.toJSON()[0].server_uri});
			alert(logs.toJSON().server_uri);
			alert(logs.toJSON()[0].server_uri);
			$.each(logs.toJSON(), function(i, log) {
				console.log(log);
			});
		}
	});*/
	
	var logs = new Logs();
	
	LogsCollection = Backbone.Collection.extend({
		model: Logs,
		url:'https://wwws.appfirst.com/api/v3/logs/',
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
			_.bindAll(this, 'render');
			this.render();
		},

		render: function(){
			var logVar = {
					server_uri: 'abc'
			};
			this.collection.fetch({
				success: function (logs){
					$.each(logs.toJSON(), function(i, log) {
						console.log(log);
					});
					var template = _.template( $("#log-template").html(), logVar );
					this.el.html(template);//(this.collection.toJSON()));
				}
			});
			
			//alert("BLAH");	
		}
	});

	var appview = new AppView({collection: logcol});
});