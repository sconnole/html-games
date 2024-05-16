"use strict";

import { CANVAS_ID } from "../canvas/index.js";

const canvas = document.getElementById(CANVAS_ID);

export default {
  name: "Think Fast",
  map: {
    platforms: [
      {
        x: 20,
        y: 50,
        width: 10,
        height: 10,
      },
    ],
  },
  start: {
    x: 25,
    y: 50,
  },
  finish: {
    x: 10,
    y: canvas.height - 100,
    width: 135,
    height: 45,
  },
};
