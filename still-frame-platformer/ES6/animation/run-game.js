"use strict";

import { getLevel } from "../levels/index.js";
import { clearScreen, drawLevel } from "../canvas/index.js";
import movePlayer from "./move-player.js";

let ANIMATION_FRAME_ID;

function runGame() {
  ANIMATION_FRAME_ID = requestAnimationFrame(runGame);
  clearScreen();
  let level = getLevel();
  movePlayer();
  // applyGravity(level.map.platforms);
  drawLevel(level);
  // if (isPlayerAtFinish(level)) {
  //   GAME_CAN_END = true;
  // } else {
  //   GAME_CAN_END = false;
  // }
}

export { ANIMATION_FRAME_ID, runGame };
