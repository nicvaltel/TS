"use strict";
const ballsNumber = 20;
const minRadius = 5;
const maxRadius = 40;
const maxV = 7;
const canvas = document.querySelector(".gameCanvas");
const width = window.innerWidth;
const height = window.innerHeight;
const ctx = canvas.getContext("2d");
const pi2 = 2 * Math.PI;
// var balls: Ball[];
function runLoop(balls) {
    function loop() {
        ctx.fillStyle = "rgb(0 0 0 / 25%)";
        ctx.fillRect(0, 0, width, height);
        console.log(width, height);
        for (const ball of balls) {
            drawBall(ball, ctx);
            updateBall(ball);
            edgeDetect(ball);
        }
        collisionDetect(balls);
        requestAnimationFrame(loop);
    }
    loop();
    return { io: {} };
}
// function loop() {
//     ctx.fillStyle = "rgb(0 0 0 / 25%)";
//     ctx.fillRect(0,0,width,height);
//     console.log(width, height);
//     for (const ball of balls){
//         drawBall(ball, ctx);
//         updateBall(ball);
//         edgeDetect(ball);
//     }
//     collisionDetect(balls);
//     requestAnimationFrame(loop);
// }
function drawBall(ball, ctx) {
    ctx.fillStyle = `rgb(${ball.colorR} ${ball.colorG} ${ball.colorB})`;
    // ctx.beginPath();
    // ctx.arc(ball.x, ball.y, ball.r, 0, pi2, false);
    // ctx.fill();
    ctx.fillRect(ball.x, ball.y, ball.r, ball.r);
    return { io: [] };
}
function updateBall(ball) {
    ball.x += ball.vx;
    ball.y += ball.vy;
    return ball;
}
function edgeDetect(ball) {
    if (ball.x <= ball.r || ball.x + ball.r >= width) {
        ball.vx = -ball.vx;
    }
    if (ball.y <= ball.r || ball.y + ball.r >= height) {
        ball.vy = -ball.vy;
    }
    return ball;
}
function collisionDetect(balls) {
    for (let i = 0; i < balls.length - 1; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const a = balls[i];
            const b = balls[j];
            if (Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) < Math.pow(a.r + b.r, 2)) {
                // [a.colorR,b.colorR] = [b.colorR, a.colorR];
                // [a.colorG,b.colorG] = [b.colorG, a.colorG];
                // [a.colorB,b.colorB] = [b.colorB, a.colorB];
                a.colorR = Math.max((a.colorR + 10) % 200, 10);
                a.colorG = Math.max((a.colorG + 10) % 200, 10);
                a.colorB = Math.max((a.colorB + 10) % 200, 10);
                b.colorR = Math.max((b.colorR + 10) % 200, 10);
                b.colorG = Math.max((b.colorG + 10) % 200, 10);
                b.colorB = Math.max((b.colorB + 10) % 200, 10);
            }
        }
    }
    return balls;
}
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function initGame(n) {
    canvas.width = width;
    canvas.height = height;
    var balls = [];
    for (let i = 0; i < n; i++) {
        const radius = rand(minRadius, maxRadius);
        const b = {
            x: rand(radius, width - radius),
            y: rand(radius, height - radius),
            r: radius,
            vx: rand(1, maxV),
            vy: rand(1, maxV),
            colorR: rand(20, 200),
            colorG: rand(20, 200),
            colorB: rand(20, 200),
        };
        balls.push(b);
    }
    return balls;
}
// const balls = initGame(ballsNumber);
runLoop(initGame(ballsNumber));
