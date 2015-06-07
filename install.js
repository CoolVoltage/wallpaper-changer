var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;
require('crontab').load(function(err,crontab){
	 console.log(err);
	 var job1 = crontab.create('wallpaper>/tmp/out.txt', '* * * * *');
	 crontab.save(function(err,crontab){});
	 
});
console.log(__dirname+"/NatGeo");
fs.mkdirSync(__dirname+"/NatGeo");
//exec("mkdir /home/"+process.env["USERNAME"]+"/Pictures/NatGeo",function(a,b,c){ console.log(a,b,c);});
//exec("pwd",function(a,b,c){console.log(a,b,c)});
