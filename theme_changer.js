// const config = require('./theme.config')
// The config is broken and doesnt needed.
exports.change = function(){
  if(!localStorage.getItem('t')) return start();
  if(localStorage.getItem('t') == "2") return dark();
  if(localStorage.getItem('t') == "1") return light();
}
function start()
{
  localStorage.setItem('t', '1');
  light();
}
function light(){
  var body = document.getElementById('theme');
  body.style = "color: black;background-color: white;";
}
function dark(){
  var body = document.getElementById('theme');
  body.style = "color: white;background-color: black;";
}
