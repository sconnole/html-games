"use strict";

import showEndScreen from "./show-end-screen.js";

export default function showSuccessScreen() {
  showEndScreen({
    title: "You did it!",
    subtext: "Press 'n' to go to the next level",
  });
}
