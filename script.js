var x = window.innerWidth / 2;
var y = window.innerHeight / 2;
var cross_size = 0.1*y;
var cross_weight = 2;
var cross_1_left = x + 0.1*x;
var cross_1_bottom =  y + 0.1*y;
var cross_2_right = x + 0.1*x;
var cross_2_top = y + 0.1*y;

function set_cross_size(cross_size){
    document.getElementById("cross-1").style.width = cross_size + "px";
    document.getElementById("cross-1").style.height = cross_size + "px";
    document.getElementById("cross-2").style.width = cross_size + "px";
    document.getElementById("cross-2").style.height = cross_size + "px";
}

function set_cross_weight(cross_weight){
    document.getElementById("cross-1").style.borderWidth = cross_weight + "px";
    document.getElementById("cross-1").style.borderWidth = cross_weight + "px";
    document.getElementById("cross-2").style.borderWidth = cross_weight + "px";
    document.getElementById("cross-2").style.borderWidth = cross_weight + "px";
}

function set_init_position(){
    cross_1_left = x + 0.1*x;
    cross_1_bottom =  y + 0.1*y;
    cross_2_right = x + 0.1*x;
    cross_2_top = y + 0.1*y;
    document.getElementById("cross-1").style.left = cross_1_left +"px";
    document.getElementById("cross-1").style.bottom = cross_1_bottom +"px";
    document.getElementById("cross-2").style.right = cross_2_right +"px";
    document.getElementById("cross-2").style.top = cross_2_top +"px";

    document.getElementById("center-dot").style.left = x + "px";
    document.getElementById("center-dot").style.bottom = y + "px";
    document.getElementById("cross-1-pos").innerText= "@cross-1 x:" + (cross_1_left - x) + "; y:" +(cross_1_bottom-y)+";";
        document.getElementById("cross-2-pos").innerText= "@cross-2 x: -" + (cross_2_right - x) + "; y: -" +(cross_2_top- y)+";";
}

function set_position(){
    document.getElementById("cross-1").style.left = cross_1_left +"px";
    document.getElementById("cross-1").style.bottom = cross_1_bottom +"px";
    document.getElementById("cross-2").style.right = cross_2_right +"px";
    document.getElementById("cross-2").style.top = cross_2_top +"px";
    document.getElementById("cross-1-pos").innerText= "@cross-1 x:" + (cross_1_left - x) + "; y:" +(cross_1_bottom-y)+";";
        document.getElementById("cross-2-pos").innerText= "@cross-2 x: -" + (cross_2_right - x) + "; y: -" +(cross_2_top- y)+";";
}

$(document).ready(function (){
    set_init_position();
    set_cross_size(cross_size);
   // set_cross_weight(cross_weight);


    document.getElementById("btn-left-1").onclick=(function(){
        cross_1_left = cross_1_left - 0.001 * x;
       // document.getElementById("cross-1").style.left = cross_1_left +"px";
       set_position();
    });

    document.getElementById("btn-right-1").onclick=(function(){
        cross_1_left= cross_1_left + 0.001 * x;
        //document.getElementById("cross-1").style.left = cross_1_left +"px";
        set_position();
    });

    document.getElementById("btn-up-1").onclick=(function(){
        cross_1_bottom = cross_1_bottom + 0.001 * y;
        //document.getElementById("cross-1").style.bottom = cross_1_bottom +"px";
        set_position();
    });

    document.getElementById("btn-down-1").onclick=(function(){
        cross_1_bottom = cross_1_bottom - 0.001 * y;
        //document.getElementById("cross-1").style.bottom = cross_1_bottom +"px";
        set_position();
    });

    document.getElementById("btn-left-2").onclick=(function(){
        cross_2_right = cross_2_right + 0.001 * x;
        //document.getElementById("cross-2").style.right = cross_2_right +"px";
        set_position();
    });

    document.getElementById("btn-right-2").onclick=(function(){
        cross_2_right = cross_2_right - 0.001 * x;
       // document.getElementById("cross-2").style.right = cross_2_right +"px";
       set_position();
    });

    document.getElementById("btn-up-2").onclick=(function(){
        cross_2_top = cross_2_top - 0.001 * y;
       // document.getElementById("cross-2").style.top = cross_2_top +"px";
        set_position();
    });

    document.getElementById("btn-down-2").onclick=(function(){
        cross_2_top = cross_2_top + 0.001 * y;
        //document.getElementById("cross-2").style.top = cross_2_top +"px";
        set_position();
    });

    document.getElementById("btn-size-larger").onclick=(function(){
        cross_size = cross_size + 0.01*y;
        cross_weight = 0.006 * cross_size;
        set_cross_size(cross_size);
        set_init_position();
        //set_cross_weight(cross_weight);
    });

    document.getElementById("btn-size-smaller").onclick=(function(){
        cross_size = cross_size - 0.01*y;
        cross_weight = 0.01 * cross_size;
        set_cross_size(cross_size);
        set_init_position();
       // set_cross_weight(cross_weight);
    });

    document.getElementById("btn-outer").onclick=(function(){
        cross_1_left= cross_1_left + 0.01 * x;
        cross_1_bottom = cross_1_bottom + 0.01 * y;
        cross_2_right = cross_2_right + 0.01 * x;
        cross_2_top = cross_2_top + 0.01 * y;

        set_position();
       // set_cross_weight(cross_weight);
    });

    document.getElementById("btn-inner").onclick=(function(){
        cross_1_left= cross_1_left - 0.01 * x;
        cross_1_bottom = cross_1_bottom - 0.01 * y;
        cross_2_right = cross_2_right - 0.01 * x;
        cross_2_top = cross_2_top - 0.01 * y;

        set_position();
       // set_cross_weight(cross_weight);
    });
    document.getElementById("show-pos").onclick=(function(){
        if(document.getElementById("position-value").style.display == "none")document.getElementById("position-value").style.display= "block";
        else document.getElementById("position-value").style.display = "none";
        document.getElementById("cross-1-pos").innerText= "@cross-1 x:" + (cross_1_left - x) + "; y:" +(cross_1_bottom-y)+";";
        document.getElementById("cross-2-pos").innerText= "@cross-2 x: -" + (cross_2_right - x) + "; y: -" +(cross_2_top- y)+";";
    });




})