import { drawActor } from "./types.js";
export class Projectile {
    constructor(x, y, width, height, speed, markedForDeletion) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.markedForDeletion = markedForDeletion;
    }
}
export function createProjectile(x, y) {
    return new Projectile(x, y, 10, 3, 3, false);
}
export function drawProjectile(ctx, projectile) {
    ctx.fillStyle = 'yellow';
    drawActor(ctx, projectile);
    return {};
}
