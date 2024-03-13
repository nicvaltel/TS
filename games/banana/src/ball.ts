import { gunX, gunY, gunWidth, gunHeight, ballRadius } from "./constants.js";
import { IO, Actor, drawActor } from "./types.js"
import { randomEnumValue } from "./prelude.js"

export class Ball implements Actor {
    public width: number;
    public height: number;
    constructor(
        public r: number,
        public x: number,
        public y: number,
        public speedX: number,
        public speedY: number,
        public color: BallColor,
    ) {
        this.width = 2*r;
        this.height = 2*r;
    }
}

export enum BallColor {
    Red = 'red',
    Orange = 'orange',
    Yellow = 'yellow',
    Green = 'green',
    Blue = 'blue',
    Violet = 'violet'
}

export function fireBall(color: BallColor): Ball {
    return new Ball(
            ballRadius,
            gunX,
            gunY - 200,
            4,
            -4,
            color,
        );
}


export function drawBall(ctx: CanvasRenderingContext2D, ball: Ball): IO {
    ctx.fillStyle = ball.color;
    ctx.strokeStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    // return drawActor(ctx, ball);
    return {};
}

export function randomNextBallColor(): BallColor {
    return randomEnumValue(BallColor);
}

