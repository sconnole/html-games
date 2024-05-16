"use strict";

import { CANVAS_ID, ELECTRIC_BLUE } from "./constants.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");

export default function showEndScreen({ title, subtext }) {
  context.fillStyle = ELECTRIC_BLUE;
  context.textAlign = "center";
  context.font = "48px Arial";
  var centerX = canvas.width / 2;
  context.fillText(title, centerX, 50);
  context.font = "24px Arial";
  context.fillText(subtext, centerX, 100);
}
