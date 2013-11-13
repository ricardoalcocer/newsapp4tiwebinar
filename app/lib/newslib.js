exports.getTableData=function(url,onSucces,onError){
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			onSucces(this.responseText);
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			onError(e);
		},
		timeout : 5000  // in milliseconds
	});

	// Prepare the connection.
	client.open("GET", url);
	// Send the request.
	client.send();
}