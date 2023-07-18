

const colors = ['linear-gradient(45deg,#d2ffff 0%, #0694c6 100%)',
                'linear-gradient(45deg,#1b0534 0%, #95909b 100%)',
                'linear-gradient(45deg,#fbd49 0%, #f7a5cb 100%)', 
                'linear-gradient(45deg,#00aeef 0%, #ed1c24 100%)', 
                'linear-gradient(45deg,#ffa31d 0%, #ef5454 100%)', 
                'linear-gradient(45deg,#7bc393 0%, #31b7c2 100%)', 
                'linear-gradient(45deg,#9e1f63 0%, #392d91 100%)'];
let index = 0;

setInterval(() => {
    const collection = document.getElementsByClassName("shape");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.background = colors[index];
    }
    index = index + 1;
    if(index==colors.length){
        index = 0;
    }
}, 2000);

function color_change(){
    document.body.style.background = "linear-gradient(to right, #434343 0%, black 100%)";
}
function color_back(){
    document.body.style.background = "linear-gradient(to right, #BDC3C7 0%, #2C3E50 100%)";
}

// _____________________________________________________________________________________________________________________________

function fade_in(){
    var container = document.querySelector('.container');
    var currentOpacity = 1;
    var targetOpacity = 0.3;
    var duration = 2000; // animation duration in milliseconds
    var interval = 50; // time interval between animation frames in milliseconds
    var step = (currentOpacity - targetOpacity) / (duration / interval);

    var animation = setInterval(function() {
    currentOpacity -= step;
    container.style.opacity = currentOpacity;

    if (currentOpacity <= targetOpacity) {
        clearInterval(animation);
    }
    }, interval);
    x = document.getElementById("shayari");
    y = document.getElementById("rap");
    z = document.getElementById("dance");
    a = document.getElementById("code");
}

function shift_s(){ 
    y.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
    
}

function shift_r(){ 
    x.style.display = "none";
    z.style.display = "none";
    a.style.display = "none";
}

function shift_d(){ 
    y.style.display = "none";
    x.style.display = "none";
    a.style.display = "none";
}

function shift_c(){ 
    y.style.display = "none";
    z.style.display = "none";
    x.style.display = "none";
}


function big_s(){
    x.style.transform = "rotate(-50deg) translate(160px, 240px) scale(1.2)";
    y.style.opacity = "0.3";
    z.style.opacity = "0.3";
    a.style.opacity = "0.3";
}
function normal_s(){
    x.style.transform = "rotate(-50deg) translate(160px, 240px) scale(1)";
    x.style.transition = "all 0.5s ease-in-out";
    y.style.opacity = "1";
    z.style.opacity = "1";
    a.style.opacity = "1";
}

function big_r(){
    y.style.transform = "rotate(-25deg) translate(90px, 60px) scale(1.2)";
    x.style.opacity = "0.3";
    z.style.opacity = "0.3";
    a.style.opacity = "0.3";
}
function normal_r(){
    y.style.transform = "rotate(-25deg) translate(90px, 60px) scale(1)";
    y.style.transition = "all 0.5s ease-in-out";
    x.style.opacity = "1";
    z.style.opacity = "1";
    a.style.opacity = "1";
}

function big_d(){
    z.style.transform = "rotate(0deg) translate(-75px, 60px) scale(1.2)";
    x.style.opacity = "0.3";
    y.style.opacity = "0.3";
    a.style.opacity = "0.3";
}
function normal_d(){
    z.style.transform = "rotate(0deg) translate(-75px, 60px) scale(1)";
    z.style.transition = "all 0.5s ease-in-out";
    x.style.opacity = "1";
    y.style.opacity = "1";
    a.style.opacity = "1";
}

function big_c(){
    a.style.transform = "rotate(25deg) translate(-200px, 250px) scale(1.2)";
    x.style.opacity = "0.3";
    z.style.opacity = "0.3";
    y.style.opacity = "0.3";
}
function normal_c(){
    a.style.transform = "rotate(25deg) translate(-200px, 250px) scale(1)";
    a.style.transition = "all 0.5s ease-in-out";
    x.style.opacity = "1";
    z.style.opacity = "1";
    y.style.opacity = "1";
}

