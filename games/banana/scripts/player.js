import { drawActor } from "./types.js";
export class Player {
    constructor(x, y, width, height, speedY, maxSpeed, projectiles) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedY = speedY;
        this.maxSpeed = maxSpeed;
        this.projectiles = projectiles;
    }
}
export const player = {
    x: 20,
    y: 100,
    width: 120,
    height: 190,
    speedY: 0,
    maxSpeed: 8,
    projectiles: [],
};
export function drawPlayer(ctx, player) {
    ctx.fillStyle = 'black';
    return drawActor(ctx, player);
}
