toggleMenu();

// getWindowToTaskbar()

function clock() {
	let time = new Date();
	let hours = time.getHours();
	let mins = time.getMinutes();
	let minutes;

	if (mins < 10) {
		minutes = "0" + mins;
	} else {
		minutes = mins;
	}

	document.getElementById("hour").innerHTML = hours + ":";
	document.getElementById("minute").innerHTML = minutes;
}

setInterval(clock, 1000);

// WEATHER APP JS START
let currentTemperature;
let temperatureDiv = document.getElementById("temperature");
let weatherDescription = document.getElementById("weatherdescription");

const weatherapi = "https://fcc-weather-api.glitch.me/api/current?lat=44.439663&lon=26.096306";

fetch(weatherapi)
	.then((response) => {
		return response.json();
	})
	.then((weathersettings) => {
		currentTemperature = Math.trunc(((weathersettings.main.temp - 32) * 5) / 9);
		console.log(weathersettings);
		temperatureDiv.innerHTML = currentTemperature + "°C";
		weatherDescription.innerHTML = weathersettings.weather[0].main;
		console.log(weathersettings.weather[0].main);
		/* console.log(weatherdescription.currently.summary); */
	});

// WEATHER APP JS END

let a1a1 = document.getElementById("starttmenu");
a1a1.addEventListener("mouseleave", function () {
	document.getElementById("startMenu").style.display = "none";
	document.getElementById("programsTab").style.display = "none";
	document.getElementById("ninthBoxOverlay").style.display = "none";
	document.getElementById("gamesTab").style.display = "none";
	document.getElementById("accessorieS").style.display = "none";
	document.getElementById("favvv").style.display = "none";
	document.getElementById("codetab").style.display = "none";
});

let fex = document.getElementById("programsTab");
fex.addEventListener(
	"mouseleave",
	function () {
		console.log("asddd");
		document.getElementById("programsTab").style.display = "none";
	},
	false
);

let peugeot = document.getElementById("eighthBox");
peugeot.addEventListener("mouseover", function () {
	fex.style.display = "none";
	document.getElementById("ninthBoxOverlay").style.display = "none";
	document.getElementById("gamesTab").style.display = "none";
	document.getElementById("accessorieS").style.display = "none";
	document.getElementById("codetab").style.display = "none";
});

document.getElementById("settingstab").addEventListener("mouseover", function () {
	document.getElementById("codetab").style.display = "none";
});

let VolvO = document.getElementById("tenth");
VolvO.addEventListener("mouseover", function () {
	fex.style.display = "none";
	document.getElementById("ninthBoxOverlay").style.display = "none";
	document.getElementById("gamesTab").style.display = "none";
	document.getElementById("accessorieS").style.display = "none";
});

function toggleMenu() {
	// stopPropagation();
	let showStartMenu = document.getElementById("startMenu");
	if (showStartMenu.style.display === "none") {
		showStartMenu.style.display = "block";
		document.getElementById("startMenu").style.zIndex = "100";
	} else {
		showStartMenu.style.display = "none";
	}
	console.log("asdf");
}

function openProgramsTab() {
	document.getElementById("programsTab").style.display = "block";
}

function openGamesTab() {
	document.getElementById("gamesTab").style.display = "block";
}

function openAccTab() {
	document.getElementById("accessorieS").style.display = "block";
}

let xamma = document.getElementById("forTest");
xamma.addEventListener("mouseover", function () {
	document.getElementById("gamesTab").style.display = "none";
});

let xanna = document.getElementById("forTestTwo");
xanna.addEventListener("mouseover", function () {
	document.getElementById("accessorieS").style.display = "none";
});

let xaooa = document.getElementById("eighthBox");
xaooa.addEventListener("mouseover", function () {
	document.getElementById("favvv").style.display = "block";
});

function closeWindows() {
	let divShowStatus = document.querySelector(".test-div");
	// if (divShowStatus.style.display === "block");
	divShowStatus.style.display = "none";
}

function closeThis() {
	let kra = document.querySelector(".folder-test");
	kra.style.display = "none";
	document.querySelector(".opened-folder-div").style.display = "none";
}

function closeThisfull() {
	let kra = document.querySelector(".folder-test3a");
	kra.style.display = "none";
	document.querySelector(".opened-folder-div").style.display = "none";
}
// MODIFICAT la 11111!!!
function openThis() {
	if ((document.getElementById("draggable").style.display = "none")) {
		document.getElementById("draggable").style.display = "block";
		document.querySelector(".opened-folder-div").style.display = "block";
	}
	// document.getElementById("draggable").style.display = "block";
	// document.querySelector(".opened-folder-div").style.display = "block";
}

// let dacia = document.querySelector(".folder-pictogram");
// dacia.addEventListener("dblclick", function(e) {
//     document.querySelector(".folder-test").style.display = "block";
//     document.querySelector(".opened-folder-div").style.display = "block";
// })

moveIt("draggable", "drag");
moveIt("movableAswell", "movableAswell");
moveIt("mycom", "mycom");
moveIt("recbin", "recbin");
moveIt("fldrframework", "frameworkmove");
moveIt("fldrframework2", "frameworkmove2");
moveIt("fldrframework3", "frameworkmove3");
moveIt("fldrframework4", "frameworkmove6");
moveIt("move15", "move15");
moveIt("move20", "move20");
moveIt("w3", "w3");
moveIt("premcarsicon", "premcarsicon");
moveIt("welcomefoldermove", "welcomefoldergrab");
moveIt("weatherfolder", "frameworkmove4");
moveIt("weatherdesktopicon", "weatherdesktopicon");
moveIt("rogame", "rogame");
const rogame = document.getElementById("rogame").addEventListener("dblclick", function () {
	window.open("/geography-demo", "_blank");
});

function w3alert() {
	alert("aren't you at work?");
}

function moveIt(parameter1, parameter2) {
	let offset = [0, 0];
	let divOverlay = document.getElementById(parameter1);
	let isDown = false;
	let actualDivOverlay = document.getElementById(parameter2);

	actualDivOverlay.addEventListener(
		"mousedown",
		function (e) {
			isDown = true;
			offset = [divOverlay.offsetLeft - e.clientX, divOverlay.offsetTop - e.clientY];
		},
		true
	);

	document.addEventListener(
		"mouseup",
		function () {
			isDown = false;
		},
		true
	);

	document.addEventListener(
		"mousemove",
		function (e) {
			event.preventDefault();
			if (isDown) {
				divOverlay.style.left = e.clientX + offset[0] + "px";
				divOverlay.style.top = e.clientY + offset[1] + "px";
				divOverlay.style.zIndex = 15;
			}
			//    preventScroll(false);
		},
		true
	);
}

document.getElementById("movableAswell").addEventListener("dblclick", function () {
	document.getElementById("welcomefoldermove").style.display = "block";
});
document.getElementById("weatherdesktopicon").addEventListener("click", function () {
	document.getElementById("weatherfolder").style.display = "block";
});

function getWindowToTaskbar() {
	let l123 = document.getElementById("taskbarOpenedFolder");
	if (l123.style.backgroundImage === 'url("images/myComputer-taskbar-onFocusimg.png")') {
		console.log("testing");
		l123.style.backgroundImage = 'url("images/myComputer-taskbar-outtaFocusimg.png")';
		document.querySelector(".folder-test").style.display = "none";
		document.querySelector(".folder-test3a").style.display = "none";
	} else {
		l123.style.backgroundImage = 'url("images/myComputer-taskbar-onFocusimg.png")';
		document.querySelector(".folder-test").style.display = "block";
	}
}

function minimizeWindow1(x3, y4, z5, h6, j7) {
	let oltcit = document.getElementById("draggable");
	let ford = document.getElementById("taskbarOpenedFolder");
	oltcit.style.display = "none";
	ford.style.backgroundImage = 'url("images/myComputer-taskbar-outtaFocusimg.png")';
}
// focusThisFolder();
// focusThisFolder("fldrframework2");
// focusThisFolder("weatherfolder");
// function focusThisFolder(thisFolder) {
//     document.getElementById(thisFolder).style.zIndex = "300";
//     console.log("testfocus");
// }

function minimizeWindow2(x3, y4, z5, h6, j7) {
	let oltcit = document.getElementById("draggable-full");
	let ford = document.getElementById("taskbarOpenedFolder");
	oltcit.style.display = "none";
	ford.style.backgroundImage = 'url("images/myComputer-taskbar-outtaFocusimg.png")';
}

function windowToFullscreen() {
	document.getElementById("draggable").style.display = "none";
	document.getElementById("draggable-full").style.display = "block";
}

function windowBackNotToFullScreen() {
	document.getElementById("draggable-full").style.display = "none";
	document.getElementById("draggable").style.display = "block";
}

fex.addEventListener("mouseover", function () {
	document.getElementById("ninthBoxOverlay").style.display = "block";
	document.getElementById("favvv").style.display = "none";
});

let closeNine = document.getElementById("ninthBox");
let seventh = document.getElementById("seventh");

closeNine.addEventListener("mouseover", function () {
	document.getElementById("favvv").style.display = "none";
});

seventh.addEventListener("mouseover", function () {
	document.getElementById("favvv").style.display = "none";
	document.getElementById("codetab").style.display = "block";
});

document.getElementById("weatheracc").addEventListener("click", function () {
	document.getElementById("weatherfolder").style.display = "block";
});
function openengineanimation() {
	document.getElementById("fldrframework").style.display = "block";
	document.getElementById("fldrframework").style.zIndex = 10;
}

function closeengineanimation() {
	document.getElementById("fldrframework").style.display = "none";
}

function close3danimation() {
	document.getElementById("fldrframework2").style.display = "none";
}

function open3danimation() {
	document.getElementById("fldrframework2").style.display = "block";
}

function openpremcars() {
	window.open("SomeCarSharingWebsite/index.html", "_blank", "width=360,height=740,left=400,top=150");
}

function closegame() {
	document.getElementById("fldrframework3").style.display = "none";
}

function openfirstgame() {
	document.getElementById("fldrframework3").style.display = "block";
}
function opensecondgame() {
	document.getElementById("fldrframework4").style.display = "block";
}
function closegame1() {
	document.getElementById("fldrframework4").style.display = "none";
}

function closeGreetingsFolder() {
	document.getElementById("welcomefoldermove").style.display = "none";
}
function closeWeatherFolder() {
	document.getElementById("weatherfolder").style.display = "none";
}

function shutdown() {
	document.getElementById("mainContainer").style.filter = "brightness(1%)";
}

// canvasgamescript

console.log("ASD");

let canvas = document.getElementById("game-canvass");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 100;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let bricks = [];
let score = 0;
let lives = 5;

for (let c = 0; c < brickColumnCount; c++) {
	bricks[c] = [];
	for (let r = 0; r < brickRowCount; r++) {
		bricks[c][r] = { x: 0, y: 0, status: 1 };
	}
	//c=columns, r=rows;
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.closePath();
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
}

function drawBricks() {
	for (let c = 0; c < brickColumnCount; c++) {
		for (let r = 0; r < brickRowCount; r++) {
			if (bricks[c][r].status == 1) {
				let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
				let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
				bricks[c][r].x = brickX;
				bricks[c][r].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#0085DD";
				ctx.fill();
				ctx.closePath();
			}
		}
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();
	x = x + dx;
	y = y + dy;

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if (y + dy < ballRadius) {
		dy = -dy;
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy;
		} else {
			lives--;
			if (!lives) {
				//     alert("Game Over");
				// document.location.reload();
				// clearInterval(interval); // Chrome
			} else {
				x = canvas.width / 2;
				y = canvas.height - 30;
				dx = 2;
				dy = -2;
				paddleX = (canvas.width - paddleWidth) / 2;
			}
		}
	}
	// !!!CHECK "if(x > paddleX && x < paddleX + paddleWidth)" !!!

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX = paddleX + 7;
	}
	if (leftPressed && paddleX > 0) {
		paddleX = paddleX - 7;
	}
	requestAnimationFrame(draw);
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
		rightPressed = true;
	} else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
		leftPressed = true;
	}
}
function keyUpHandler(e) {
	if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
		rightPressed = false;
	} else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
		leftPressed = false;
	}
}

function collisionDetection() {
	for (let c = 0; c < brickColumnCount; c++) {
		for (let r = 0; r < brickRowCount; r++) {
			let b = bricks[c][r];
			if (b.status == 1) {
				if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
					dy = -dy;
					b.status = 0;
					score++;
					if (score == brickRowCount * brickColumnCount) {
						alert("congrats test test test"); //needs some improvement
						document.location.reload();
						// clearInterval(interval);//Chrome again
					}
				}
			}
		}
	}
}

function drawScore() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "green";
	ctx.fillText("Score: " + score, 8, 20);
}
function drawLives() {
	ctx.font = "16px Arial";
	ctx.fillStyle = "red";
	ctx.fillText("lives: " + lives, canvas.width - 57, 20);
}

draw();

// canvasgamescriptend
