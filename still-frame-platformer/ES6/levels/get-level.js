"use strict";

import { LEVELS, CURRENT_LEVEL_INDEX } from "./index.js";

export default function getLevel(index) {
  index = index || CURRENT_LEVEL_INDEX;
  return LEVELS[index];
}
