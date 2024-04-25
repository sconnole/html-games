"use strict";

import {
  setPlayerInfoByLevel,
  moveLeft,
  moveRight,
    jump,
    PLAYER,
} from "./player/index.js";
import { runGame } from "./animation/index.js";
import { getLevel } from "./levels/index.js";

function startGame() {
  let level = getLevel();
  setPlayerInfoByLevel(level);
  requestAnimationFrame(runGame);
}

function setupEvents() {
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      jump();
    } else if (e.key === " ") {
      if (GAME_CAN_END) {
        endGame({ completed: true });
      }
    } else if (e.key === "r") {
      endGame({ completed: false });
      startGame();
    } else if (e.key === "n") {
      startGame();
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      PLAYER.direction.x = 0;
    }
  });
}

setupEvents();
startGame();
