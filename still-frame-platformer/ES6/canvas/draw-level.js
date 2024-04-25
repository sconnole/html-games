"use strict";

import drawFinishPoint from "./draw-finish-point.js";
import drawLevelName from "./draw-level-name.js";
import drawMap from "./draw-map.js";
import drawPlayer from "./draw-player.js";

export default function (level) {
  drawFinishPoint(level);
  drawLevelName(level.name);
  drawMap(level.map);
  drawPlayer();
}
