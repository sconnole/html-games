"use strict";

import { CANVAS_ID } from "../canvas/index.js";
import { BOTTOM_PLATFORM } from "./platforms/index.js";

const canvas = document.getElementById(CANVAS_ID);
const platformSize = {
  width: 80,
  height: 20,
};
const xSegment = canvas.width / 5;
const ySegment = canvas.height / 5;

export default {
  name: "How do I go up?",
  map: {
    platforms: [
      BOTTOM_PLATFORM,
      {
        x: xSegment,
        y: canvas.height - ySegment,
        ...platformSize,
      },
      {
        x: xSegment * 2,
        y: canvas.height - ySegment * 2,
        ...platformSize,
      },

      {
        x: xSegment * 3,
        y: canvas.height - ySegment * 3,
        ...platformSize,
      },
      {
        x: xSegment * 4,
        y: canvas.height - ySegment * 4,
        ...platformSize,
      },
    ],
  },
  start: {
    x: 25,
    y: canvas.height - 200,
  },
  finish: {
    x: xSegment * 4 + 40,
    y: canvas.height - ySegment * 4,
    width: 40,
    height: 40,
  },
};
