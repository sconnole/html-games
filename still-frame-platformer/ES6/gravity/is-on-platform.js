"use strict";

import { PLAYER } from "../player/index.js";
import itemsOverlapX from "./items-overlap-x.js";
import itemsOverlapY from "./items-overlap-y.js";

export default function (platform) {
  return itemsOverlapX(PLAYER, platform) && itemsOverlapY(PLAYER, platform);
}
