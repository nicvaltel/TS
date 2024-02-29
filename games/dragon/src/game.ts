import {IO} from "./types.js"
import {Player, updatePlayer, drawPlayer} from "./player.js"

export type Game = {
    width : number;
    height: number;
    player: Player;
    keys : string[];
    
}

export function createGame(width: number, height: number, player : Player): Game {
    return {
        width : width,
        height: height,
        player : player,
        keys : [],
    }
}

export function updateGame(game: Game) : Game {
    game.player = updatePlayer(game.player, game.keys, game.height);
    return game;
}

export function drawGame(ctx: CanvasRenderingContext2D, game: Game) : IO<{}>{
    drawPlayer(ctx, game.player);
    return {io:{}};
}