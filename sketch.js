
let song; 

let peaks;

let link; 

function preload() {
  song = loadSound("autumn-leaf_with-violins-74917.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
peaks = song.getPeaks(width)
link= createA("https://ks7150.github.io/HW08B/","Ellipses")

}



function draw() {
  background(120, 120, 220);
for(let i=0; i < peaks.length; i++){
  
line (i%width,height/2+peaks[i]*height/2, i%width, height/2)
let x= i%width;
link.position(10,10);

}




}

function mouseClicked() {
  song.play();
}









