var distance = 85;
var deg= 0;
var p_wid=5.09;
$(document).ready(function (){
    document.getElementById("closer").onclick=(function(){
        distance+= 5;
        document.getElementById("image-line").style.width = distance + "px";
    });

    document.getElementById("away").onclick=(function(){
        distance-= 5;
        document.getElementById("image-line").style.width = distance + "px";
    });

    document.getElementById("refresh").onclick=(function(){
        distance= 85;
        document.getElementById("image-line").style.width = distance + "px";
        var div = document.getElementById('image-line');
        div.style.webkitTransform = 'translate(-50%,-50%)';
        div.style.mozTransform    = 'translate(-50%,-50%)';
        div.style.msTransform     = 'translate(-50%,-50%)';
        div.style.oTransform      = 'translate(-50%,-50%)';
        div.style.transform       = 'translate(-50%,-50%)'; 
    });
    document.getElementById('next').onclick = (function() {
        var div = document.getElementById('image-line');
        deg += 30;
    
        div.style.webkitTransform = 'translate(-50%,-50%) rotate('+deg+'deg)'; 
        div.style.mozTransform    = 'translate(-50%,-50%) rotate('+deg+'deg)'; 
        div.style.msTransform     = 'translate(-50%,-50%) rotate('+deg+'deg)'; 
        div.style.oTransform      = 'translate(-50%,-50%) rotate('+deg+'deg)'; 
        div.style.transform       = 'translate(-50%,-50%) rotate('+deg+'deg)'; 
    });

    document.getElementById("result").onclick=(function(){
        var real_d = distance * p_wid / 300;
        document.getElementById("butons-list").style.display="none";
        document.getElementById("resultarea").innerHTML = "Distance: "+ real_d;
        document.getElementById("resultarea").style.display="block";
    });

    document.getElementById("resultarea").onclick=(function(){
        document.getElementById("resultarea").style.display="none";
        document.getElementById("butons-list").style.display="block";
    });
})