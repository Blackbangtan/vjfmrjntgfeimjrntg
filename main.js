img="";
status="";

function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas = createCanvas(640 , 420);
canvas.center();
objector = ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(img,0,0,640,420);
fill("red");
text("dog",40,75);
noFill();
stroke("red");
rect(30,60,450,350);

fill("red");
text("cat",320,120);
noFill();
stroke("red");
rect(300,100,270,320);
}

function modelLoaded(){
console.log("modelLoaded");
status=true;
objector.detect(img, gotResult);
}

function gotResult(error, results){
if(error){
console.log(error);
}
console.log(results);

}