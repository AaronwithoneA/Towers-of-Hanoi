const View = require('./view.js');
const Game = require('./game.js');

$( () => {
  const $rootEl = $('.hanoi');
  const game = new Game();
  new View(game, $rootEl);
});
