
let song; 

let peaks;

let sliderGraph; 

function preload() {
  song = loadSound("autumn-leaf_with-violins-74917.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
peaks = song.getPeaks(width)


}



function draw() {
  background(120, 120, 220);
for(let i=0; i < peaks.length; i++){
  
line (i%width,height/2+peaks[i]*height/2, i%width, height/2)
let x= i%width;
noFill()
strokeWeight(1/2)

}




}

function mouseClicked() {
  song.play();
}









