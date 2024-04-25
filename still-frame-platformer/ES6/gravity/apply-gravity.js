"use strict";

import playerIsOnPlatform from "./is-on-platform.js";
import playerIsMovingDown from "./player-is-moving-down.js";
import { GRAVITY, MAX_FALLING_SPEED } from "./constants.js";
import { PLAYER } from "../player/index.js";
import { CANVAS_ID } from "../canvas/index.js";

export default function (platforms) {
  if (playerIsOnPlatform(platforms) && playerIsMovingDown()) {
    PLAYER.fallingSpeed = GRAVITY;
  } else {
    PLAYER.y += PLAYER.fallingSpeed;
    PLAYER.fallingSpeed += GRAVITY;
    if (PLAYER.fallingSpeed >= MAX_FALLING_SPEED) {
      PLAYER.fallingSpeed = MAX_FALLING_SPEED;
    }
  }

  const canvas = document.getElementById(CANVAS_ID);
  if (PLAYER.y >= canvas.height + PLAYER.height) {
    endGame({ completed: false });
  }
}
