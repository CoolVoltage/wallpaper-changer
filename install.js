var sys = require('sys');
var exec = require('child_process').exec;
require('crontab').load(function(err,crontab){
	 var job1 = crontab.create('wallpaper>/tmp/out.txt', '* * * * *');
	 crontab.save(function(err,crontab){});
	 
});

exec("mkdir ~/Pictures/NatGeo",function(){});
