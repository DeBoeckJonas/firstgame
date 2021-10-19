"use strict";

const keysDisplay = document.getElementById("keys");
const start = document.getElementById("start");
const block = document.getElementById("block");
const grid = document.getElementById("gamegrid");
const width = 28;
let position;
let flashyCurrentIndex = 30;
let keys = 0;

function colorChange() {
  block.style.backgroundColor = rgbRandom();
}

function rgbRandom() {
  return (
    "rgb(" +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    "," +
    Math.random() * 255 +
    ")"
  );
}

start.addEventListener("click", colorChange);

//recall function over and over again
moveCenterBlock();

window.setInterval(function () {
  moveCenterBlock();
}, 10000);

//function declarations//
////////////////////////

function moveCenterBlock() {
  let directionCenterBlock = Math.random() * 10;
  if (directionCenterBlock < 3) {
    removeDown();
    removeUp();
    removeLeft();
    block.classList.add("moveRight");
  } else if (directionCenterBlock >= 3 && directionCenterBlock < 6) {
    removeRight();
    removeUp();
    removeLeft();
    block.classList.add("moveDown");
  } else if (directionCenterBlock >= 6 && directionCenterBlock < 8) {
    removeRight();
    removeDown();
    removeLeft();
    block.classList.add("moveUp");
  } else if (directionCenterBlock >= 8 && directionCenterBlock < 11) {
    removeRight();
    removeDown();
    removeUp();
    block.classList.add("moveLeft");
  }
}

function removeRight() {
  block.classList.remove("moveRight");
}
function removeLeft() {
  block.classList.remove("moveLeft");
}
function removeUp() {
  block.classList.remove("moveUp");
}
function removeDown() {
  block.classList.remove("moveDown");
}

//gameboard//
////////////
const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 3, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,
  1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 2, 0, 1, 1, 0,
  1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
const squares = [];
function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    squares.push(square);
    if (layout[i] === 1) {
      squares[i].classList.add("wall");
    } else if (layout[i] === 2) {
      squares[i].classList.add("key");
    } else if (layout[i] === 3) {
      squares[i].classList.add("exit");
    }
  }
}
createBoard();

//player//
///////////////////////////

//starting position//

let playerCurrentIndex = 754;
squares[playerCurrentIndex].classList.add("player");

//move//

function movePlayer(e) {
  squares[playerCurrentIndex].classList.remove("player");
  switch (e.keyCode) {
    case 37:
      if (
        playerCurrentIndex % width !== 0 &&
        !squares[playerCurrentIndex - 1].classList.contains("wall") &&
        !squares[playerCurrentIndex - 1].classList.contains("exit")
      )
        playerCurrentIndex -= 1;
      break;
    case 38:
      if (
        playerCurrentIndex - width >= 0 &&
        !squares[playerCurrentIndex - width].classList.contains("wall") &&
        !squares[playerCurrentIndex - width].classList.contains("exit")
      )
        playerCurrentIndex -= width;
      break;
    case 39:
      if (
        playerCurrentIndex % width < width - 1 &&
        !squares[playerCurrentIndex + 1].classList.contains("wall") &&
        !squares[playerCurrentIndex + 1].classList.contains("exit")
      )
        playerCurrentIndex += 1;
      break;
    case 40:
      if (
        playerCurrentIndex + width < width * width &&
        !squares[playerCurrentIndex + width].classList.contains("wall") &&
        !squares[playerCurrentIndex + width].classList.contains("exit")
      )
        playerCurrentIndex += width;
      break;
  }
  squares[playerCurrentIndex].classList.add("player");
  keyGrabbed();
  exitRoom();
  changeExitToWin();
  checkForGameOver();
}
document.addEventListener("keyup", movePlayer);

class Guard {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timerId = NaN;
  }
}

let guards = [
  new Guard("reddy", 29, 250),
  new Guard("pinky", 30, 400),
  new Guard("purply", 333, 300),
  new Guard("whitey", 450, 500),
];

//draw guards onto the grid
guards.forEach((guard) => {
  squares[guard.currentIndex].classList.add(guard.className);
  squares[guard.currentIndex].classList.add("guard");
});

//move the Guard randomly
guards.forEach((guard) => moveGuard(guard));

function moveGuard(guard) {
  const directions = [-1, +1, width, -width];
  let direction = directions[Math.floor(Math.random() * directions.length)];

  guard.timerId = setInterval(function () {
    //if the next squre your guard is going to go to does not have a guard and does not have a wall
    if (
      !squares[guard.currentIndex + direction].classList.contains("guard") &&
      !squares[guard.currentIndex + direction].classList.contains("wall") &&
      !squares[guard.currentIndex + direction].classList.contains("exit")
    ) {
      //remove the guards classes
      squares[guard.currentIndex].classList.remove(guard.className);
      squares[guard.currentIndex].classList.remove("guard");
      //move into that space
      guard.currentIndex += direction;
      squares[guard.currentIndex].classList.add(guard.className, "guard");
      //else find a new random direction ot go in
    } else direction = directions[Math.floor(Math.random() * directions.length)];
  }, guard.speed);
}

//grabbing key

function keyGrabbed() {
  if (squares[playerCurrentIndex].classList.contains("key")) {
    keys++;
    keysDisplay.innerHTML = keys;
    squares[playerCurrentIndex].classList.remove("key");
  }
}

function exitRoom() {
  if (squares[playerCurrentIndex].classList.contains("exitWin")) {
    guards.forEach((guard) => clearInterval(guard.timerId));
    document.removeEventListener("keyup", movePlayer);
    setTimeout(function () {
      alert("You have WON!");
    }, 500);
  }
}

function changeExitToWin() {
  if (keys === 2) {
    squares[58].classList.remove("exit");
    squares[58].classList.add("exitWin");
  }
}

function checkForGameOver() {
  if (squares[playerCurrentIndex].classList.contains("guard")) {
    squares[playerCurrentIndex].classList.remove("player");
    squares[playerCurrentIndex] = 0;
    guards.forEach((guard) => clearInterval(guard.timerId));
    document.removeEventListener("keyup", movePlayer);
    setTimeout(function () {
      alert("Game Over");
    }, 500);
  }
}

window.setInterval(function () {
  checkForGameOver();
}, 10);
