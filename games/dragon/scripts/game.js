import { updatePlayer, drawPlayer } from "./player.js";
export function createGame(width, height, player) {
    return {
        width: width,
        height: height,
        player: player,
        keys: [],
    };
}
export function updateGame(game) {
    game.player = updatePlayer(game.player, game.keys, game.height);
    return game;
}
export function drawGame(ctx, game) {
    drawPlayer(ctx, game.player);
    return { io: {} };
}
