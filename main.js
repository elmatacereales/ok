canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

roverWidth=100;
roverHeight=90;
rover_x=10;
rover_y=10; 
background_image="mars.jpg";
rover_image="rover.png";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadrover;
rover_imgTag.src=rover_image;

} 
function uploadBackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
} 
function uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,roverWidth,roverHeight);
} 
window.addEventListener("keydown",mykeydown);
function mykeydown (e) {
keyPressed=e.keyCode;
console.log (keyPressed);
if(keyPressed=="38"){
    up(); 
} 
if(keyPressed=="40"){
    down(); 

} 
if(keyPressed=="37"){
    left(); 
    
} 
if(keyPressed=="39"){
    right();  
    
} 
} 
function up () {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        console.log (rover_y) 
        uploadBackground ();
        uploadrover (); 
        
    }
    
} 
function down () {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log (rover_y);
        uploadBackground ();
        uploadrover (); 
        
    }
} 
function left () {
    if (rover_x>=0) {
        rover_x=rover_x-10
        console.log (rover_x); 
        uploadBackground ();
        uploadrover ();
    }
} 
function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10;
        console.log (rover_x);
        uplodBackground (); 
        uploadrover (); 
        
    }
} 
