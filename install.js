require('crontab').load(function(err,crontab){
	 var job1 = crontab.create('wallpaper>/tmp/out.txt', '* * * * *');
	 crontab.save(function(err,crontab){console.log(crontab.jobs())});
	 
});
