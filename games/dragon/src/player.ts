import {IO} from "./types.js"


export type Player = {
    x : number;
    y : number;
    width : number;
    height : number;
    speedY : number;
    maxSpeed : number;
}

export const player : Player = {
    x : 20,
    y : 100,
    width : 120,
    height : 190,
    speedY : 0,
    maxSpeed : 8,
}

export function updatePlayer(player : Player, keys: string[], gameHeight : number) : Player {
    if (keys.includes('ArrowUp')){
        player.speedY = -player.maxSpeed;
    } else if (keys.includes('ArrowDown')){
        player.speedY = player.maxSpeed;
    } else {
        player.speedY = 0;
    }

    player.y += player.speedY;

    if (player.y > gameHeight - player.height * 0.5) {
        player.y = gameHeight - player.height * 0.5;
    } else if (player.y < -player.height * 0.5) {
        player.y = -player.height * 0.5;
    }

    return player;
}

export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player): IO<{}> {
    ctx.fillRect(player.x, player.y, player.width, player.height);
    return {io:{}};
}

