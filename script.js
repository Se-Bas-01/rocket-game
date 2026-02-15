const BACKGROUND = "#17002b";

console.log(game);
game.width = 720;
game.height = 480;
const ctx = game.getContext("2d");
console.log(ctx);
ctx.fillStyle = BACKGROUND;
ctx.fillRect(0, 0, game.width, game.height);