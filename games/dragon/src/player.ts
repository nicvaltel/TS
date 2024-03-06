import { Projectile, createProjectile } from "./projectile.js";
import { IO, Actor, drawActor } from "./types.js"


export class Player implements Actor {
    constructor(
        public x: number,
        public y: number,
        public width: number,
        public height: number,
        public speedY: number,
        public maxSpeed: number,
        public projectiles: Projectile[],
        ) { }
}

export const player: Player = {
    x: 20,
    y: 100,
    width: 120,
    height: 190,
    speedY: 0,
    maxSpeed: 8,
    projectiles: [],
}





export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player) : IO{
    ctx.fillStyle = 'black';
    drawActor(ctx, player);
    return {};
}
