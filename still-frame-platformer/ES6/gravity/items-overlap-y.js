"use strict";

export default function(item1, item2) {
            return item1.y < item2.y + item2.height && item1.y > item2.y;
          }
