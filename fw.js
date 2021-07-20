var distance = 85;
$(document).ready(function (){
    document.getElementById("closer").onclick=(function(){
        distance+= 5;
        document.getElementById("image-line").style.width = distance + "px";
    });

    document.getElementById("away").onclick=(function(){
        distance-= 5;
        document.getElementById("image-line").style.width = distance + "px";
    });
})