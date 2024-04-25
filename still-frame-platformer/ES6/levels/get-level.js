"use strict";

import { LEVELS } from "./index.js";

let CURRENT_LEVEL_INDEX = 0;

export default function getLevel() {
  return LEVELS[CURRENT_LEVEL_INDEX];
}
