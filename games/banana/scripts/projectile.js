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
    return drawActor(ctx, projectile);
}
class Ammo {
    constructor(ammo, ammoTimer) {
        this.ammo = ammo;
        this.ammoTimer = ammoTimer;
    }
}
Ammo.maxAmmo = 50;
Ammo.ammoInterval = 500; // in milliseconds
export { Ammo };
export function updateAmmo(ammo, deltaTime) {
    if (ammo.ammoTimer > Ammo.ammoInterval) {
        if (ammo.ammo < Ammo.maxAmmo) {
            ammo.ammo++;
        }
        ammo.ammoTimer = 0;
    }
    else {
        ammo.ammoTimer += deltaTime;
    }
    return ammo;
}
