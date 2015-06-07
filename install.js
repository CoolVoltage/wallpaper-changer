var sys = require('sys');
var fs = require('fs');
var exec = require('child_process').exec;
/*require('crontab').load(function(err,crontab){
	 var job1 = crontab.create('wallpaper>/tmp/out.txt', '* * * * *');
	 crontab.save(function(err,crontab){});
	 
});
*/
//fs.mkdirSync("/home/"+process.env["USERNAME"]+"/Pictures/NatGeo");
//exiec("mkdir /home/"+process.env["USERNAME"]+"/Pictures/NatGeo",function(a,b,c){ console.log(a,b,c);});
exec("whoami",function(a,b,c){console.log(a,b,c)});
