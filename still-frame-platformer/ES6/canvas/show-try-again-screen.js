"use strict";

import showEndScreen from "./show-end-screen.js";

export default function showSuccessScreen() {
  showEndScreen({
      title: "Whoops",
                subtext: "Press 'r' to reset and try again",
  });
}
