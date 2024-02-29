export const player = {
    width: 120,
    height: 190,
    x: 20,
    y: 100,
    speedY: 0,
    maxSpeed: 8,
};
export function updatePlayer(player, keys, gameHeight) {
    if (keys.includes('ArrowUp')) {
        player.speedY = -player.maxSpeed;
    }
    else if (keys.includes('ArrowDown')) {
        player.speedY = player.maxSpeed;
    }
    else {
        player.speedY = 0;
    }
    player.y += player.speedY;
    if (player.y > gameHeight - player.height * 0.5) {
        player.y = gameHeight - player.height * 0.5;
    }
    else if (player.y < -player.height * 0.5) {
        player.y = -player.height * 0.5;
    }
    return player;
}
export function drawPlayer(ctx, player) {
    ctx.fillRect(player.x, player.y, player.width, player.height);
    return { io: {} };
}
// export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player): void {
//     ctx.fillRect(player.x, player.y, player.width, player.height);
// }
