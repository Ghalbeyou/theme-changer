/*
This is littry the CONFIG!
PLEASE only EDIT the values that we allow you. Outher
Values are for app!
Any edit can already destroy the whole app!
*/

var theme_save_type = "1"; // number one is for localStorage, number two is from files

var light = false; // true or false, this is for your choice.

var dark = true; // your choice.

// Edit the value in the bottom are recommended!
var exittype = "2"; // 1=EXIT with only proccess.exit() 2 is for exit when you closed the app.

var defualt_theme = "light"; // default theme

// DO NOT EDIT THE BOTTOM CODE!
exports.dt = defualt_theme;

exports.exit = exittype;

exports.savetheme = function(code){
  if(code == "1") return light;
  if(code == "2") return dark;
}

exports.theme_lightcode = light;
exports.theme_darkcode = dark;
