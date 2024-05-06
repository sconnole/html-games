"use strict";

import { PLAYER } from "./player.js";
import { itemsOverlapX, itemsOverlapY } from "../gravity/index.js";

export default function (level) {
  return (
    itemsOverlapX(PLAYER, level.finish) && itemsOverlapY(PLAYER, level.finish)
  );
}
