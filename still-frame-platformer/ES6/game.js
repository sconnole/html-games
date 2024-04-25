"use strict";

import { setPlayerInfoByLevel } from "./player/index.js";
import { runGame } from "./animation/index.js";
import { getLevel } from "./levels/index.js";

function startGame() {
  let level = getLevel();
  setPlayerInfoByLevel(level);
  requestAnimationFrame(runGame);
}

startGame();
