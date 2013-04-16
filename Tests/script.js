$(document).ready(function(){
   $('#getLogsButton').click(function(){
   		var searchString = $('#logSearchString').val();
   		var searchSource = $('#logSearchTenant').val() + '_' + $('#logSearchServer').val() + '_' + $('#logSearchLog').val();
   		$.ajax({
    		dataType: 'json',
    		type: 'GET',
    		url: 'http://184.173.78.71:4567/search_by_keywords',
    		data:{'keywords[]':searchString,'limit':'20','sources[]':searchSource},
    		contentType:'application/json',
    		beforeSend: function(x) {
  				if(x && x.overrideMimeType) {
   					x.overrideMimeType("application/json;charset=UTF-8");
  				}
 			},
    		success: function(json) {
        		// data be a javascript object that contains your already decoded json data
        		console.log(json);
        		
        		$.each(json.value, function(i, log_source) {
        			$.each(log_source.values, function(key, value) {
        				$(".result").append("<b>" + value + "</b><br>");
        			});
        		});	
    		},
    		error: function(request, textStatus, errorThrown) {
    			alert(textStatus);
  			}
		});
	});
});		
