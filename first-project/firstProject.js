"use strict";

let start = document.getElementById("start");
let block = document.getElementById("block");
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

document.body.onkeydown = function (direction) {
  if (direction.keyCode == 39) {
    block.classList.remove("moveDown");
    block.classList.remove("moveUp");
    block.classList.remove("moveLeft");
    block.classList.add("moveRight");
  } else if (direction.keyCode == 40) {
    block.classList.remove("moveRight");
    block.classList.remove("moveUp");
    block.classList.remove("moveLeft");
    block.classList.add("moveDown");
  } else if (direction.keyCode == 38) {
    block.classList.remove("moveRight");
    block.classList.remove("moveDown");
    block.classList.remove("moveLeft");
    block.classList.add("moveUp");
  } else if (direction.keyCode == 37) {
    block.classList.remove("moveRight");
    block.classList.remove("moveDown");
    block.classList.remove("moveUp");
    block.classList.add("moveLeft");
  } else if (direction.keyCode == 32) {
    block.classList.remove("moveRight");
    block.classList.remove("moveDown");
    block.classList.remove("moveUp");
    block.classList.remove("moveLeft");
  }
};
position = block.getBoundingClientRect();

// 318.3999938964844 668.5499877929688 338.3999938964844 648.5499877929688
