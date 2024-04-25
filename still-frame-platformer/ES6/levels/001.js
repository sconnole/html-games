"use strict";

import { CANVAS_ID } from "../canvas/index.js";
import { BOTTOM_PLATFORM } from "./platforms/index.js";

const canvas = document.getElementById(CANVAS_ID);

export default {
  name: "Spacebar will help you",
  finish: {
    x: canvas.width - 45,
    y: canvas.height - 20,
    width: 45,
    height: 45,
  },
  start: {
    x: 100,
    y: 100,
  },
  map: {
    platforms: [BOTTOM_PLATFORM, { x: 20, y: 300, width: 400, height: 20 }],
  },
};
