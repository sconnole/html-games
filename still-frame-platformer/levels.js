const CANVAS = document.getElementById("game");
const DEFAULT_OFFSET = 50;
const DEFAULT_BOTTOM_PLATFORM = {
  x: 0,
  y: CANVAS.height - DEFAULT_OFFSET,
  width: CANVAS.width,
  height: DEFAULT_OFFSET,
};
const DEFAULT_MAP = {
  platforms: [
    DEFAULT_BOTTOM_PLATFORM,
    { x: 20, y: 300, width: 400, height: 20 },
  ],
};

const LEVELS = [
  {
    name: "Spacebar will help you",
    finish: {
      x: CANVAS.width - DEFAULT_OFFSET,
      y: CANVAS.height - DEFAULT_OFFSET,
      width: 45,
      height: 45,
    },
    start: {
      x: 100,
      y: 100,
    },
    map: DEFAULT_MAP,
  },
  {
    name: "Think Fast",
    map: {
      platforms: [],
    },
    start: {
      x: 10,
      y: 0,
    },
    finish: {
      x: 10,
      y: CANVAS.height - 10,
      width: 200,
      height: 45,
    },
  },
  {
    name: "How do I go up?",
    map: {
      platforms: [
        DEFAULT_BOTTOM_PLATFORM,
        {
          x: CANVAS.width / 5,
          y: CANVAS.height - CANVAS.height / 5,
          width: 50,
          height: 20,
        },
        {
          x: (CANVAS.width / 5) * 2,
          y: CANVAS.height - (CANVAS.height / 5) * 2,
          width: 50,
          height: 20,
        },

        {
          x: (CANVAS.width / 5) * 3,
          y: CANVAS.height - (CANVAS.height / 5) * 3,
          width: 50,
          height: 20,
        },
        {
          x: (CANVAS.width / 5) * 4,
          y: CANVAS.height - (CANVAS.height / 5) * 4,
          width: 50,
          height: 20,
        },
      ],
    },
    start: {
      x: 10,
      y: 0,
    },
    finish: {
      x: (CANVAS.width / 5) * 4,
      y: CANVAS.height - (CANVAS.height / 5) * 4,
      width: 45,
      height: 45,
    },
  },
];
