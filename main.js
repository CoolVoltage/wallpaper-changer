var sys = require('sys')
var exec = require('child_process').exec;
var $ = require('cheerio');
var request = require('request');
function puts(error, stdout, stderr) { 
	}
function translateDateToPictureName(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	today = mm+':'+dd+':'+yyyy+'.jpg';
	return today;	
	}
function savePictureAndSetWallpaper(photoUrl){
	var todayPic = translateDateToPictureName();
	exec("wget -O /home/kvijay/Pictures/NatGeo/"+todayPic+" "+photoUrl,puts);
	exec("gsettings set org.gnome.desktop.background picture-uri file:///home/kvijay/Pictures/NatGeo/"+todayPic, puts);
}
function parseHtml(err,resp,rawHtml){
	if(err){
		return;
	}	
	var html = $.load(rawHtml);
	html(".primary_photo img").map(function(i,link){
		var src = $(link).attr('src');
		savePictureAndSetWallpaper("http:"+src);
		console.log(src);
	});
}
request("http://photography.nationalgeographic.com/photography/photo-of-the-day/",parseHtml);
