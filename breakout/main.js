/** @type {HTMLCanvasElement} */
let canvas;
/** @type {CanvasRenderingContext2D} */
let canvasContext;

let mouseX = 0;
let mouseY = 0;

let ballX = 75;
let ballY = 75;
let ballSpeedX = 5;
let ballSpeedY = 3;

const BRICK_W = 80;
const BRICK_H = 20;
const BRICK_GAP = 4;
const BRICK_ROWS = 14;
const BRICK_COLS = 10;


let brickGrid = new Array(BRICK_COLS * BRICK_ROWS);

const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_BOTTOM = 60;

let paddleX = 360;
let paddleY;

window.onload = function () {

  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  var framesPerSecond = 60;
  setInterval(updateAll, 1000 / framesPerSecond);

  canvas.addEventListener("mousemove", updateMousePos);
  brickReset();

}

function updateMousePos(evt) {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
  paddleX = mouseX - PADDLE_WIDTH / 2;
}



function updateAll() {
  moveAll();
  drawAll();

}
function ballReset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = 5;
  ballSpeedY = 3;
}

function moveAll() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX > canvas.width || ballX < 0) {
    ballSpeedX *= -1;
  }

  if (ballY < 0) {
    ballSpeedY *= -1;
  }

  if (ballY > canvas.height) {
    ballReset();
  }

  let paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_BOTTOM;
  let paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
  let paddleLeftEdgeX = paddleX;
  let paddleRightEdgeX = paddleX + PADDLE_WIDTH;

  if (ballY > paddleTopEdgeY - 5 &&
    ballY < paddleBottomEdgeY &&
    ballX > paddleLeftEdgeX &&
    ballX < paddleRightEdgeX) {
    ballSpeedY *= -1;

    let centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
    let ballDistFromPaddleCenterX = ballX - centerOfPaddleX;
    ballSpeedX = ballDistFromPaddleCenterX * 0.25;
  }
}

function brickReset() {
  for (let i = 0; i < BRICK_COLS * BRICK_ROWS; i++) {

    brickGrid[i] = true;


  }

}

function drawBricks() {
  for (let rows = 0; rows < BRICK_ROWS; rows++) {
    for (let cols = 0; cols < BRICK_COLS; cols++) {
      let arrayIndex = rowColToArrayIndex(cols, rows);
      if (brickGrid[arrayIndex]) {
        colorRect(BRICK_W * cols, BRICK_H * rows, BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP, "blue");
      }
    }
  }
}

function rowColToArrayIndex(col, row) {
  return col + BRICK_COLS * row;
}

function drawAll() {
  colorRect(0, 0, canvas.width, canvas.height, "black");//clear screen
  colorCircle(ballX, ballY, 10, "white"); //draw ball

  colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_BOTTOM, PADDLE_WIDTH, PADDLE_THICKNESS, "white"); //draw paddle
  drawBricks();

  let mouseBrickCol = Math.floor(mouseX / BRICK_W);
  let mouseBrickRow = Math.floor(mouseY / BRICK_H);
  let brickIndexUnderMouse = rowColToArrayIndex(mouseBrickCol, mouseBrickRow);
  colorText(`${mouseBrickCol}, ${mouseBrickRow} : ${brickIndexUnderMouse}`, mouseX, mouseY, "yellow");

  if (brickIndexUnderMouse >= 0 && brickIndexUnderMouse < BRICK_COLS * BRICK_ROWS) {
    brickGrid[brickIndexUnderMouse] = false;
  }
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorText(showWords, textX, textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, textX, textY);
}