"use strict";

import { PLAYER } from "./player.js";

export default function (level) {
  PLAYER.x = level.start.x;
  PLAYER.y = level.start.y;
}
