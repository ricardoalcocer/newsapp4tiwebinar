var newslib=require('newslib');

var onSucces=function(data){
	var parsedData=JSON.parse(data);
	var row;
	var rows=[];

	parsedData.forEach(function(story){
		var payload={
			title: story.title,
			summary: story.summary,
			thumb: story.thumb
		};

		row=Alloy.createController('news.row',payload).getView();
		rows.push(row);
	});
	$.newstable.data=rows;
}

var onError=function(error){
	console.log(error);
}

var dataURL="https://f35e8fe3a29573a21436d972a36c7ad7b4e92cf9.cloudapp.appcelerator.com/api/news/get/all";
var data=newslib.getTableData(dataURL,onSucces,onError);

$.home.open();
