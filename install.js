var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;
require('crontab').load(function(err,crontab){
	 console.log(err);
	 var job1 = crontab.create('wallpaper>/tmp/out.txt', '* * * * *');
	 crontab.save(function(err,crontab){});
	 
});
console.log(__dirname+"/NatGeo");
exec("mkdir Pictures/NatGeo",function(a,b,c){ console.log(a,b,c);});
