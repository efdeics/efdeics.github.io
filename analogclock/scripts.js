function rotateHands() {

let time = new Date();
let hours = time.getHours();
let mins = time.getMinutes();
let seconds = time.getSeconds();

let secsAngle = (seconds * 6) + 'deg';
let minsAngle = (mins * 6) + 'deg';
let hrsAngle = (hours * 30) + 'deg';

document.getElementById("sec").style.transform = `rotateZ(${secsAngle})`;
document.getElementById("min").style.transform = `rotateZ(${minsAngle})`;
document.getElementById("hr").style.transform = `rotateZ(${hrsAngle})`;

}

setInterval(rotateHands, 1000);

rotateHands();
