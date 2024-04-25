"use strict";

import { CANVAS_ID } from "./constants.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");



export default function (name) {
  context.textAlign = "left";
  context.fillStyle = "white";
  context.font = "14px Arial";
  context.fillText(name, 20, 20);
}
