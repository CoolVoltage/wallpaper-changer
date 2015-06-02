#!/usr/bin/env node
var sys = require('sys');
var exec = require('child_process').exec;
var $ = require('cheerio');
var request = require('request');
var todayPic = "";
var shellArgs = process.argv;
var fs = require('fs');
var sha = require('sha1');

for(i=2;i<shellArgs.length;i++){
	switch(shellArgs[i]){
	}	
}
if(shellArgs.length==2){
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
	}
function parseHtml(err,resp,rawHtml){
	if(err){
		return;
	}	
	var html = $.load(rawHtml);
	html(".primary_photo img").map(function(i,link){
		var src = $(link).attr('src');
		todayPic = sha(src)+'.jpg';
		if(!fs.existsSync(process.env.HOME+"/Pictures/NatGeo/"+todayPic))
			exec("wget -O ~/Pictures/NatGeo/"+todayPic+" "+"http:"+src,setWallPaper);
	});
}
