"use strict";

import { ANIMATION_FRAME_ID } from "./run-game.js";
import { incrementLevel } from "../levels/index.js";

export default function ({ completed }) {
  cancelAnimationFrame(ANIMATION_FRAME_ID);
    if (completed) {
    incrementLevel();
    showSuccessScreen();
  } else {
    showTryAgainScreen();
  }
}
