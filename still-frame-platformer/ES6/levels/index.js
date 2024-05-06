"use strict";

import level1 from "./001.js";
import level2 from "./002.js";
import level3 from "./003.js";

export const LEVELS = [level1, level2, level3];

export { default as getLevel } from "./get-level.js";
export let CURRENT_LEVEL_INDEX = 0;

export function incrementLevel() {
    CURRENT_LEVEL_INDEX++
}
