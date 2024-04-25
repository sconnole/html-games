"use strict";

import { CANVAS_ID } from "./constants.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");

export default function clearScreen() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
