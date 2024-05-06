"use strict";

import { getLevel } from "../levels/index.js";
import { clearScreen, drawLevel } from "../canvas/index.js";
import movePlayer from "./move-player.js";
import { applyGravity } from "../gravity/index.js";
import { playerIsAtFinish, PLAYER } from "../player/index.js";

let ANIMATION_FRAME_ID;

function runGame() {
  ANIMATION_FRAME_ID = requestAnimationFrame(runGame);
  clearScreen();
  let level = getLevel();
  movePlayer();
  applyGravity(level.map.platforms);
  drawLevel(level);
  if (playerIsAtFinish(level)) {
    PLAYER.isAtFinish = true;
  } else {
    PLAYER.isAtFinish = false;
  }
}

export { ANIMATION_FRAME_ID, runGame };
