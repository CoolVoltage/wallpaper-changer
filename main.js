#!/usr/bin/env node
var sys = require('sys');
var exec = require('child_process').exec;
var $ = require('cheerio');
var request = require('request');
var todayPic = translateDateToPictureName();
var shellArgs = process.argv;
var fs = require('fs');

for(i=2;i<shellArgs.length;i++){
	switch(shellArgs[i]){
	}	
}
if(shellArgs.length==2){
	if(!fs.existsSync(process.env.HOME+"/Pictures/NatGeo/"+todayPic))
		request("http://photography.nationalgeographic.com/photography/photo-of-the-day/",parseHtml);
}
function execCallback(error,stdout,stderr){
	console.log(error);
	console.log(stdout);
	console.log(stderr);
}
function setWallPaper(error, stdout, stderr) { 
	if(error)
		return;
	exec("sh "+__dirname+"/setPaperScript.sh "+todayPic,execCallback);
	//exec("gsettings set org.gnome.desktop.background picture-uri file://$HOME/Pictures/NatGeo/"+todayPic,execCallback);
	}
function translateDateToPictureName(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	today = mm+':'+dd+':'+yyyy+'.jpg';
	return today;	
	}
function parseHtml(err,resp,rawHtml){
	if(err){
		return;
	}	
	console.log("yo");
	var html = $.load(rawHtml);
	html(".primary_photo img").map(function(i,link){
		var src = $(link).attr('src');
		exec("wget -O ~/Pictures/NatGeo/"+todayPic+" "+"http:"+src,setWallPaper);
	});
}
