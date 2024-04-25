"use strict";

import { CANVAS_ID, ELECTRIC_BLUE } from "./constants.js";
import { PLAYER } from "../player/index.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");

export default function () {
  const headHeight = PLAYER.height / 12;
  const diameter = headHeight * 2;
  const headStartLocation = PLAYER.y - PLAYER.height;
  context.beginPath();
  context.arc(PLAYER.x, headStartLocation, diameter, 0, Math.PI * 2, true);
  context.strokeStyle = ELECTRIC_BLUE;
  context.stroke();
  context.closePath();

  context.beginPath();
  const bottomOfHead = headStartLocation + diameter;
  const limbLength = PLAYER.height / 4;
  const bodyEndLocation = PLAYER.y - limbLength - diameter;
  context.moveTo(PLAYER.x, bottomOfHead);
  context.lineTo(PLAYER.x, bodyEndLocation);
  context.stroke();
  context.closePath();

  const armStartLocation = bottomOfHead + PLAYER.height / 8;
  drawLimbs(limbLength, armStartLocation);
  drawLimbs(limbLength, bodyEndLocation);
}

function drawLimbs(length, startLocation) {
  context.beginPath();
  context.moveTo(PLAYER.x, startLocation);
  context.lineTo(PLAYER.x + length, startLocation + length);
  context.moveTo(PLAYER.x, startLocation);
  context.lineTo(PLAYER.x - length, startLocation + length);
  context.stroke();
  context.closePath();
}
