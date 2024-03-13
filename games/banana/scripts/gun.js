import { gunX, gunY, gunWidth, gunHeight } from "./constants.js";
import { drawActor } from "./types.js";
export class Gun {
    constructor(x, y, angle, width, height) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.width = width;
        this.height = height;
    }
}
export const playerGun = {
    x: gunX,
    y: gunY,
    angle: 0,
    width: gunWidth,
    height: gunHeight,
};
export function drawGun(ctx, gun) {
    ctx.fillStyle = 'black';
    return drawActor(ctx, gun);
}
