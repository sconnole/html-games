"use strict";

import isOnPlatform from "./is-on-platform.js";

export default function (platforms) {
  return platforms.some(isOnPlatform);
}
