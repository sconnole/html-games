"use strict";

import { CANVAS_ID, LIGHT_BROWN, DARK_BROWN, SOFT_PINK } from "./constants.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");

export default function (level) {
  drawDoorFrame(level.finish);
  const frameWidth = 2;
  drawDoorPanels(level.finish, frameWidth);
  drawDoorknobs(level.finish, frameWidth);
}

function drawDoorFrame(finish) {
  context.fillStyle = LIGHT_BROWN;
  context.fillRect(
    finish.x,
    finish.y - finish.height,
    finish.width,
    finish.height,
  );
}

function drawDoorPanels(finish, frameWidth) {
  context.fillStyle = DARK_BROWN;
  drawDoorPanel(finish, frameWidth, 0);
  drawDoorPanel(finish, frameWidth, finish.width / 2);
}

function drawDoorPanel(finish, frameWidth, xOffset) {
  context.fillRect(
    finish.x + frameWidth + xOffset,
    finish.y - finish.height + frameWidth,
    finish.width / 2 - frameWidth * 2,
    finish.height - frameWidth * 2,
  );
}

function drawDoorknobs(finish, frameWidth) {
  context.beginPath();
  drawDoorknob(finish, -frameWidth - 5);
  drawDoorknob(finish, frameWidth + 5);
  context.fillStyle = SOFT_PINK;
  context.fill();
  context.closePath();
}

function drawDoorknob(finish, offset) {
  context.arc(
    finish.x + finish.width / 2 + offset,
    finish.y - finish.height / 2,
    3,
    0,
    Math.PI * 2,
    true,
  );
}
