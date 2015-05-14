var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("gsettings set org.gnome.desktop.background picture-uri file:///home/kvijay/kvijay/public/background.jpg", puts);
