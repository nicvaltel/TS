import { drawActor } from "./types.js";
export class Enemy {
    constructor(color, x, y, width, height, speedX, speedY, lives, score, markedForDeletion) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.lives = lives;
        this.score = score;
        this.markedForDeletion = markedForDeletion;
    }
}
export function drawEnemy(ctx, enemy) {
    ctx.fillStyle = enemy.color;
    drawActor(ctx, enemy);
    ctx.fillStyle = 'black';
    ctx.font = '20px Helvetica';
    ctx.fillText(enemy.lives.toString(), enemy.x, enemy.y - 5);
    return {};
}
export function updateEnemy(enemy) {
    enemy.x += enemy.speedX;
    if (enemy.x + enemy.width < 0) {
        enemy.markedForDeletion = true;
    }
    return enemy;
}
export function createAngler1(x, height) {
    const h = 169 * 0.2;
    return new Enemy('red', x, Math.random() * (height * 0.95 - h), 228 * 0.2, h, Math.random() * -1.5 - 2.5, 0, 5, 5, false);
}
export function createAngler2(x, height) {
    const h = 165 * 0.3;
    return new Enemy('green', x, Math.random() * (height * 0.95 - h), 213 * 0.3, h, Math.random() * -1.5 - 2.5, 0, 5, 5, false);
}
export function newEnemy(width, height) {
    const randomize = Math.random();
    if (randomize < 0.5) {
        return createAngler1(width, height);
    }
    else {
        return createAngler2(width, height);
    }
}
export function initialEnemies() {
    return {
        enemies: [],
        enemyTimer: 0,
        enemyInterval: 1000,
    };
}
