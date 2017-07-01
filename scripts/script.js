$( document ).ready(function() {
	$(document).keypress(function(e){
   	if(e.which == 13) {
    	var projectName = $("#project-input").val();
    	console.log(projectName);
		getFlickrData(projectName); 
	}
	});

    	
});

function getFlickrData (projectName) {
	console.log(projectName);
	var flickrURL = "https://api.flickr.com/services/rest/" 
		+ "?method=" + "flickr.photos.search" 
		+ "&api_key=" + "488f0fface616fb2db949fbad9a7655e"
		+ "&text=" + projectName
		+ "&sort=" + "relevance"
		+ "&format=json"
		+ "&nojsoncallback=1";

console.log (flickrURL)

$.ajax({
	 	url: flickrURL,
	 	type: "GET",
	 	dataType: "json",
	 	error: function(data){
	 		console.log("Flickr Error");
		 	},
	 	success: function(data){
	 		console.log(data);
	 		var imgObj = data.photos.photo[0];
	 		var imgURL = "https://farm" + imgObj.farm
	 					+ ".staticflickr.com/"
	 					+ imgObj.server + "/"
	 					+ imgObj.id + "_" + imgObj.secret + ".jpg"
	 		
	 		$("#flickrImage").empty();
	 		$("#flickrImage").append("<img src='" + imgURL + "'>");
	 		$("#issueName").empty();
	 		$("#issueName").append(projectName);
	 		$("#issueName2").empty();
	 		$("#issueName2").append(projectName);
	 		$("#issueName3").empty();
	 		$("#issueName3").append(projectName);
	 		$("#issueName4").empty();
	 		$("#issueName4").append(projectName);
	 		$("#issueName5").empty();
	 		$("#issueName5").append(projectName);
	 		$("#issueName6").empty();
	 		$("#issueName6").append(projectName);
	 		$("#issueName7").empty();
	 		$("#issueName7").append(projectName);
	 		$("#issueName8").empty();
	 		$("#issueName8").append(projectName);




	 		
}
	 });
};



