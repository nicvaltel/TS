import { gunX, gunY, gunWidth, gunHeight } from "./constants.js";
import { IO, Actor, drawActor } from "./types.js"

export class Gun implements Actor {
    constructor(
        public x: number,
        public y: number,
        public angle: number,
        public width: number,
        public height: number,
    ) { }
}

export const playerGun: Gun = {
    x: gunX,
    y: gunY,
    angle: 0,
    width: gunWidth,
    height: gunHeight,
}

export function drawGun(ctx: CanvasRenderingContext2D, gun: Gun): IO {
    ctx.fillStyle = 'black';
    return drawActor(ctx, gun);
}

