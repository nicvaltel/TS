import { Actor, IO, drawActor } from "./types.js";

export class Projectile implements Actor {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public speed: number,
        public markedForDeletion: boolean) { }
}


export function createProjectile(x: number, y: number): Projectile {
    return new Projectile(x, y, 10, 3, 3, false);
}

export function drawProjectile(ctx: CanvasRenderingContext2D, projectile: Projectile): IO {
    ctx.fillStyle = 'yellow';
    drawActor(ctx, projectile);
    return {};
}


