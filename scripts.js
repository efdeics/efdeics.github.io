toggleMenu();


// getWindowToTaskbar() 



function clock() {

let time = new Date();
let hours = time.getHours();
let mins = time.getMinutes();
let minutes;

if ( mins < 10) {
    minutes = "0" + mins;
}
else {
    minutes = mins;
}

document.getElementById('hour').innerHTML = hours + ":";
document.getElementById('minute').innerHTML = minutes;

}

setInterval(clock, 1000);

let a1a1 = document.getElementById("starttmenu");
a1a1.addEventListener("mouseleave", function(){
    document.getElementById("startMenu").style.display = "none";
    document.getElementById("programsTab").style.display = "none";
    document.getElementById("ninthBoxOverlay").style.display = "none";
    document.getElementById("gamesTab").style.display = "none";
    document.getElementById("accessorieS").style.display = "none";
    document.getElementById("favvv").style.display = "none";
})

let fex = document.getElementById("programsTab");
fex.addEventListener("mouseleave", function() {
    console.log("asddd");
    document.getElementById("programsTab").style.display = "none";
}, false)


let peugeot = document.getElementById("eighthBox");
peugeot.addEventListener("mouseover", function() {
    fex.style.display = "none";
    document.getElementById("ninthBoxOverlay").style.display = "none";
    document.getElementById("gamesTab").style.display = "none";
    document.getElementById("accessorieS").style.display = "none";
})

let VolvO = document.getElementById("tenth");
VolvO.addEventListener("mouseover", function() {
    fex.style.display = "none";
    document.getElementById("ninthBoxOverlay").style.display = "none";
    document.getElementById("gamesTab").style.display = "none";
    document.getElementById("accessorieS").style.display = "none";
})



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
xamma.addEventListener("mouseover", function() {
    document.getElementById("gamesTab").style.display = "none";
})

let xanna = document.getElementById("forTestTwo");
xanna.addEventListener("mouseover", function() {
    document.getElementById("accessorieS").style.display = "none";
})

let xaooa = document.getElementById("eighthBox");
xaooa.addEventListener("mouseover", function() {
    document.getElementById("favvv").style.display = "block";
})
// function programsTabIsActive() {
//     if (document.getElementById("programsTab").style.display = "block") {
//         document.querySelector("#ninth-box").backgroundImage = 'url("images\/ninth-box-img2.png")';
//     }
// }

// let offset = [0,0];
// let divOverlay = document.getElementById ("draggable");
// let isDown = false;
// let actualDivOverlay = document.getElementById("drag");

// actualDivOverlay.addEventListener("mousedown", function(e) {
// isDown = true;
// offset = [
//     divOverlay.offsetLeft - e.clientX,
//     divOverlay.offsetTop - e.clientY
//  ];
// }, true);

// document.addEventListener("mouseup", function() {
//    isDown = false;
// }, true);

// document.addEventListener("mousemove", function(e) {
//     event.preventDefault();
//     if (isDown) {
//         divOverlay.style.left = (e.clientX + offset[0]) + 'px';
//         divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
//         divOverlay.style.zIndex = 15;
//    }
// }, true);


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
    if (document.getElementById("draggable").style.display = "none") {
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
moveIt("move15", "move15");
moveIt("move20", "move20");
moveIt("w3", "w3");

function w3alert() {
    alert("aren't you at work?");
}

function moveIt(parameter1, parameter2) {

let offset = [0,0];
let divOverlay = document.getElementById (parameter1);
let isDown = false;
let actualDivOverlay = document.getElementById(parameter2);

actualDivOverlay.addEventListener("mousedown", function(e) {
isDown = true;
offset = [
    divOverlay.offsetLeft - e.clientX,
    divOverlay.offsetTop - e.clientY
 ];
}, true);

document.addEventListener("mouseup", function() {
   isDown = false;
}, true);

document.addEventListener("mousemove", function(e) {
    event.preventDefault();
    if (isDown) {
        divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
        divOverlay.style.zIndex = 15;
   }
//    preventScroll(false);
}, true);

}

function getWindowToTaskbar() {
    let l123 = document.getElementById("taskbarOpenedFolder");
    if (l123.style.backgroundImage === 'url("images\/myComputer-taskbar-onFocusimg.png")') {
        console.log("testing");
    l123.style.backgroundImage = 'url("images\/myComputer-taskbar-outtaFocusimg.png")';
    document.querySelector(".folder-test").style.display = "none";
    }
    else {
        l123.style.backgroundImage = 'url("images\/myComputer-taskbar-onFocusimg.png")'
        document.querySelector(".folder-test").style.display = "block";
    }
}

function minimizeWindow1(x3, y4, z5, h6, j7) {
    let oltcit = document.getElementById("draggable");
    let ford = document.getElementById("taskbarOpenedFolder");
    oltcit.style.display = "none";
    ford.style.backgroundImage = 'url("images\/myComputer-taskbar-outtaFocusimg.png")';
}

function minimizeWindow2(x3, y4, z5, h6, j7) {
    let oltcit = document.getElementById("draggable-full");
    let ford = document.getElementById("taskbarOpenedFolder");
    oltcit.style.display = "none";
    ford.style.backgroundImage = 'url("images\/myComputer-taskbar-outtaFocusimg.png")';
}

function windowToFullscreen() {
    document.getElementById("draggable").style.display = "none";
    document.getElementById("draggable-full").style.display = "block";
}

function windowBackNotToFullScreen() {
    document.getElementById("draggable-full").style.display = "none";
    document.getElementById("draggable").style.display = "block";
}

fex.addEventListener("mouseover", function() {
    document.getElementById("ninthBoxOverlay").style.display = "block";
    document.getElementById("favvv").style.display = "none";
})

let closeNine = document.getElementById("ninthBox");
let seventh = document.getElementById("seventh");

closeNine.addEventListener("mouseover", function() {
    document.getElementById("favvv").style.display = "none";
})

seventh.addEventListener("mouseover", function() {
    document.getElementById("favvv").style.display = "none";
})

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

function closegame() {
    document.getElementById("fldrframework3").style.display = "none";
}

function openfirstgame() {
    document.getElementById("fldrframework3").style.display = "block";
}

function shutdown() {
    document.getElementById("mainContainer").style.filter = "brightness(1%)";
}
// canvasgamescript
console.log("Asd");

let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 100;
let paddleX = (canvas.width-paddleWidth) / 2;
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

for(let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x : 0, y : 0, status: 1 };
    }
    //c=columns, r=rows;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
            let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
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

    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
            lives--;
            if(!lives) {
                alert("Game Over");
            document.location.reload();
            // clearInterval(interval); // Chrome
            }
            else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }
// !!!CHECK "if(x > paddleX && x < paddleX + paddleWidth)" !!!  

    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX = paddleX + 7;
    }
    if(leftPressed && paddleX > 0) {
        paddleX = paddleX - 7;
    }
    requestAnimationFrame(draw); 
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// document.addEventListener("mousemove", mouseMoveHandler, false);

// function mouseMoveHandler(e) {
//     let relativeX = e.clientX - canvas.offsetLeft;
//     if(relativeX > 0 && relativeX < canvas.width) {
//         paddleX = relativeX - paddleWidth / 2;
//     }
// }
function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = true;
    } 
}
function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight" || e.key == "d") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft" || e.key == "a") {
        leftPressed = false;
    } 
}

function collisionDetection() {
    for(let c = 0; c < brickColumnCount; c++) {
        for(let r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == brickRowCount * brickColumnCount) {
                        alert("Congrats, you WON!" + score);//needs some improvement
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











// document.getElementById("forTest").addEventListener("mouseover", function() {
//     document.getElementById("firstGame").style.display = "none";
// } )


// funtion closeEntireMenu() {
//     document.getElementById("startMenu").style.display = "none";
// }

// let l222 = document.querySelector(".opened-folder-div");
// l222.addEventListener("click", function() {
//     if (l122.style.backgroundImage = 'url("images/myComputer-taskbar-outtaFocusimg.png")')
// })




/*
let dragItem = document.querySelector("#drag");
let container = document.querySelector("#draggable");

let active = false;
let currentX;
let currentX;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
    if (e.type === "")
}














/*/////////////////////////////////////////////////////////////
// Make the DIV element draggable:
/*dragElement(document.getElementById("drag"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "gable")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "gable").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
/////////////////////////////



















/*function powerOffEffect() {
    let effect = document.getElementById("mainContainer");
    effect.classList.toggle("container-dim-effect");
}

setInterval(powerOffEffect, 1000*10);
/*

/* function testHideMenu() {
    let startDisplaySetting = document.getElementById("startMenu");
    if (startDisplaySetting.style.display === "block") {
        startDisplaySetting.style.display = "none";
    } else {
        startDisplaySetting.style.display = "block";
    }
}    
*/    

/* function startButtonStyle() {
    let ajk = document.getElementById("thestartbutton");
    ajk.classList.toggle("start-button-active");
}
*/



















/* function testHideMenu() {
    let qwe = document.getElementById("startMenu");
    if (qwe.style.display === "block") {
        qwe.style.display = "none";
    }
    }
*/
/* function hideMenu() {
    var menuHide = document.getElementsByClassName("hideMenu");
    var menuToggle = document.getElementById("startMenu");
    if (menuToggle.style.display === "block") {
        menuToggle.style.display = "none";
    }
} 
while startMenu.style.display === "block";
do {
  startMenu.style.display = "none";
}
function toggleTest() {
    let asd = document.getElementById("startMenu");
    do {
        asd.style.display = "none";
     }
    while (asd.style.display = "block"); 
}
*/

