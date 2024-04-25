"use strict";

import { LEVELS } from "./index.js";

let CURRENT_LEVEL_INDEX = 0;

export default function getLevel(index) {
  index = index || CURRENT_LEVEL_INDEX;
  return LEVELS[index];
}
