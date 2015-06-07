#!/usr/bin/env node
var sys = require('sys');
var exec = require('child_process').exec;
var $ = require('cheerio');
var request = require('request');
var todayPic = "";
var shellArgs = process.argv;
var fs = require('fs');
var sha = require('sha1');
		console.log("yo");
for(i=2;i<shellArgs.length;i++){
	switch(shellArgs[i]){
	}	
}
		console.log("yo");
if(shellArgs.length==2){
		console.log("yo");
		request("http://photography.nationalgeographic.com/photography/photo-of-the-day/",parseHtml);
}
function errorHandler(error,stdout,stderr,func){
	if(func)
		console.log(func);
	if(error||stderr){
		console.log(error);
		console.log(stdout);
		console.log(stderr);
		return true;
	}
	console.log("OK");
	return false;
}

function setWallPaper(error,stdout,stderr) { 
	//if(errorHandler(error,stdout,stderr,'setWallPaper'))
	//	return;
	exec("sh "+__dirname+"/setPaperScript.sh "+__dirname+"/NatGeo/"+todayPic,errorHandler);
	}

function parseHtml(err,resp,rawHtml){
	if(errorHandler(err,null,null,'parseHtml'))
		return;
	var html = $.load(rawHtml);

	html(".primary_photo img").map(function(i,link){
		var src = $(link).attr('src');
		todayPic = sha(src)+'.jpg';
		if(!fs.existsSync(__dirname+"/NatGeo/"+todayPic))
			exec("wget -O "+__dirname+"/NatGeo/"+todayPic+" "+"http:"+src,setWallPaper);
	});

}
