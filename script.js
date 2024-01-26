
var principal=parseFloat(document.getElementById("principal").value);
var rate=document.getElementById("rate");
var time=document.getElementById("time");
var calculate=document.getElementById("calculate");
var output=document.getElementById("output");
var simpleInterest=(principal*rate*time)/100;
var themeContainer=document.getElementById("themeContainer");
const colorSwitch=document.querySelector(".colorSwitch");

const root = document.documentElement;

isOff=true;
function themeClick(){
    if(isOff){
        themeContainer.style.display="grid";  
        isOff=false;
    }
    else{
        themeContainer.style.display="none";
        isOff=true;
    }
}
colorSwitch.addEventListener('click', themeClick);


function onCalcClick(){
    // output.innerHTML=simpleInterest;
    output.innerHTML=principal.value;
}

function onClearClick(){
    principal.valueOf="";
    rate.value="";
    time.value="";
    output.innerHTML=0+".00";
}

// DAFAULT THEME BUTTON
const default_theme = document.getElementById('default_theme');
function default_theme_onClick(){
    root.style.setProperty('--mcolor','var(--mcolorDefault)');
    default_theme.style.textShadow='0 0 10px var(--ntext-color)';
    red_theme.style.textShadow='0 0 10px var(--ntext-color)';
    orange_theme.style.color='var(--ntext-color)';
    red_theme.style.color='var(--ntext-color)';
    red_theme.style.textShadow='none';
    orange_theme.style.textShadow='none';
}
default_theme.addEventListener('click',default_theme_onClick);

function default_theme_MouseOver(){
    default_theme.style.textShadow='0 0 10px var(--mcolorDefault)';
    default_theme.style.color='var(--mcolorDefault)';
}
default_theme.addEventListener('mouseover',default_theme_MouseOver);

function default_theme_MouseOut(){
    default_theme.style.color='var(--ntext-color)';
}
default_theme.addEventListener('mouseout',default_theme_MouseOut);

//****//


//RED THEME BUTTON

const red_theme=document.getElementById('red_theme');
function red_theme_onClick(){
    root.style.setProperty('--mcolor','var(--mcolor-red)');
    red_theme.style.textShadow='0 0 5px var(--ntext-color)';function default_theme_MouseOver(){
        default_theme.style.textShadow='0 0 10px var(--mcolorDefault)';
        default_theme.style.color='var(--mcolorDefault)';
    }
    default_theme.addEventListener('mouseover',default_theme_MouseOver);
    
    function default_theme_MouseOut(){
        default_theme.style.color='var(--ntext-color)';
    }
    default_theme.addEventListener('mouseout',default_theme_MouseOut);
    default_theme.style.textShadow='none';
    orange_theme.style.color='var(--ntext-color)';
    red_theme.style.color='var(--mcolor-red)';
    orange_theme.style.textShadow='none';
    default_theme.style.color='var(--ntext-color)';
}
red_theme.addEventListener('click', red_theme_onClick);

function red_theme_MouseOver(){
    red_theme.style.textShadow='0 0 10px var(--mcolorDefault)';
    red_theme.style.color='var(--mcolor-red)';
}
red_theme.addEventListener('mouseover',red_theme_MouseOver);

function red_theme_MouseOut(){
    red_theme.style.color='var(--ntext-color)';
}
red_theme.addEventListener('mouseout',red_theme_MouseOut);
//*** */

// ORANGE THEME BUTTON
const orange_theme=document.getElementById('orange_theme');
function orange_theme_onClick(){
    root.style.setProperty('--mcolor','var(--mcolor-orange)');
    red_theme.style.textShadow='0 0 5px var(--mcolor-orange)';
    default_theme.style.textShadow='none';
    orange_theme.style.color='var(--mcolor-orange)';
    red_theme.style.color='var(--ntext-color)';
}
orange_theme.addEventListener('click',orange_theme_onClick);