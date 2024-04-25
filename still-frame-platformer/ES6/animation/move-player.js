"use strict";

import { PLAYER } from "../player/index.js";
import { CANVAS_ID } from "../canvas/index.js";

const canvas = document.getElementById(CANVAS_ID);

export default function () {
  if (PLAYER.x <= 0) {
    PLAYER.x = canvas.width;
  } else if (PLAYER.x >= canvas.width) {
    PLAYER.x = 0;
  }

  if (PLAYER.direction.x === "left") {
    PLAYER.x -= PLAYER.speed;
  } else if (PLAYER.direction.x === "right") {
    PLAYER.x += PLAYER.speed;
  }
}
