"use strict";

import { CANVAS_ID, MINT_GREEN } from "./constants.js";

const canvas = document.getElementById(CANVAS_ID);
const context = canvas.getContext("2d");

export default function (map) {
  map.platforms.forEach(drawPlatform);
}

function drawPlatform(platform) {
  context.fillStyle = platform.color ?? MINT_GREEN;
  context.fillRect(platform.x, platform.y, platform.width, platform.height);
}
