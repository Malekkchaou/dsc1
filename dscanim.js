window.onlaod=function()
{
var t=setInterval(move,10);
var pos =0;
var box=document.getElementById("ss");
function move() {
pos+=1;
box.style.left=pos+"px";
}
}
