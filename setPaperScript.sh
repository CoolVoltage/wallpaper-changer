#!/bin/bash
echo $1
PID=$(pgrep gnome-session)
export DBUS_SESSION_BUS_ADDRESS=$(grep -z DBUS_SESSION_BUS_ADDRESS /proc/$PID/environ|cut -d= -f2-)
gsettings set org.gnome.desktop.background picture-uri "file://$1"
notify-send 'Wallpaper has been changed'
