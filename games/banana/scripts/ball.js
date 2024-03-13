import { gunX, gunY, ballRadius } from "./constants.js";
import { randomEnumValue } from "./prelude.js";
export class Ball {
    constructor(r, x, y, speedX, speedY, color) {
        this.r = r;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.width = 2 * r;
        this.height = 2 * r;
    }
}
export var BallColor;
(function (BallColor) {
    BallColor["Red"] = "red";
    BallColor["Orange"] = "orange";
    BallColor["Yellow"] = "yellow";
    BallColor["Green"] = "green";
    BallColor["Blue"] = "blue";
    BallColor["Violet"] = "violet";
})(BallColor || (BallColor = {}));
export function fireBall(color) {
    return new Ball(ballRadius, gunX, gunY - 200, 4, -4, color);
}
export function drawBall(ctx, ball) {
    ctx.fillStyle = ball.color;
    ctx.strokeStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    // return drawActor(ctx, ball);
    return {};
}
export function randomNextBallColor() {
    return randomEnumValue(BallColor);
}
