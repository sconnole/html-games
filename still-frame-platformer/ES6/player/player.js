const DEFAULT_PLAYER = {
  width: 10,
  height: 30,
  y: 0,
  x: 50,
  direction: {
    x: 0,
    y: 0,
  },
  speed: 3,
  fallingSpeed: 1,
  isAtEnd: false,
};

let PLAYER = DEFAULT_PLAYER;

export { PLAYER, DEFAULT_PLAYER };
