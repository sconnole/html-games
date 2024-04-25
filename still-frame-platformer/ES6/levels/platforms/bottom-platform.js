"use strict";
import { CANVAS_ID } from "../../canvas/index.js";

const canvas = document.getElementById(CANVAS_ID);
const DEFAULT_OFFSET = 50;
export default {
  x: 0,
  y: canvas.height - DEFAULT_OFFSET,
  width: canvas.width,
  height: DEFAULT_OFFSET,
};
