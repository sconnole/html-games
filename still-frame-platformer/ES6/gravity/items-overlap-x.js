"use strict";

export default function (item1, item2) {
  return item1.x < item2.x + item2.width && item1.x + item1.width > item2.x;
}
