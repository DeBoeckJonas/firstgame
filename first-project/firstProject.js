"use strict";

const start = document.getElementById("start");
const block = document.getElementById("block");
const grid = document.getElementById("gamegrid");
const width = 28;
let position;

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
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0,
  1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0,
  1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
  1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
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
        !squares[playerCurrentIndex - 1].classList.contains("wall")
      )
        playerCurrentIndex -= 1;
      break;
    case 38:
      if (
        playerCurrentIndex - width >= 0 &&
        !squares[playerCurrentIndex - width].classList.contains("wall")
      )
        playerCurrentIndex -= width;
      break;
    case 39:
      if (
        playerCurrentIndex % width < width - 1 &&
        !squares[playerCurrentIndex + 1].classList.contains("wall")
      )
        playerCurrentIndex += 1;
      break;
    case 40:
      if (
        playerCurrentIndex + width < width * width &&
        !squares[playerCurrentIndex + width].classList.contains("wall")
      )
        playerCurrentIndex += width;
      break;
  }
  squares[playerCurrentIndex].classList.add("player");
}
document.addEventListener("keyup", movePlayer);
