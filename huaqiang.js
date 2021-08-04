var distance = 85;
var top1 = 140;
var top2 = 140;
var deg= 0;
var p_wid=5.09;
$(document).ready(function (){
    document.getElementById("closer").onclick=(function(){
        top1+= 0.2;
        top2-= 0.2;
        document.getElementById("image-line-1").style.top = top1 + "px";
        document.getElementById("image-line-2").style.top = top2 + "px";
    });

    document.getElementById("away").onclick=(function(){
        top1-= 0.2;
        top2+= 0.2;
        document.getElementById("image-line-1").style.top = top1 + "px";
        document.getElementById("image-line-2").style.top = top2 + "px";
    });

    document.getElementById("refresh").onclick=(function(){
        top1 = 140;
        top2 = 140;
        document.getElementById("image-line-1").style.top = 140 + "px";
        document.getElementById("image-line-2").style.top = 140 + "px";
    });
    document.getElementById("result").onclick=(function(){
        var real_d = - (top2-top1)* p_wid / 300;
        var a=1.729;
        var t=15;
        var f=105;
        var diopter = 1000/(a*f+t*(a-9.174*real_d))*(a-9.174*real_d);
        document.getElementById("butons-list").style.display="none";
        document.getElementById("resultarea").innerHTML = "Diopter "+ diopter;
        document.getElementById("resultarea").style.display="block";
    });

    document.getElementById("resultarea").onclick=(function(){
        document.getElementById("resultarea").style.display="none";
        document.getElementById("butons-list").style.display="block";
    });
})