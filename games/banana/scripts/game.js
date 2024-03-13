import { fireBall, drawBall, randomNextBallColor } from "./ball.js";
import { Keys, cloneUserInput, emptyUserInput, initialScore } from "./types.js";
import { drawGun, playerGun } from "./gun.js";
import { defaultUI } from "./ui.js";
import { ballDiametr, ballSquareDiametr } from "./constants.js";
export function createGame(width, height) {
    return {
        width: width,
        height: height,
        inputBuffer: emptyUserInput(),
        userInput: emptyUserInput(),
        gun: playerGun,
        ui: defaultUI(),
        flyingBall: null,
        nextBallColor: randomNextBallColor(),
        balls: [],
        gameOver: false,
        score: initialScore(),
    };
}
export function updateGame(game, deltaTime) {
    game.userInput = cloneUserInput(game.inputBuffer);
    game = processUserInput(game);
    game = updateFlyingBall(game, deltaTime);
    return game;
}
function processUserInput(game) {
    const keys = game.userInput.inputKeys;
    if (keys.has(Keys.Fire)) {
        if (game.flyingBall === null) {
            game.flyingBall = fireBall(game.nextBallColor);
            game.nextBallColor = randomNextBallColor();
        }
        keys.delete(Keys.Fire);
    }
    return game;
}
function updateFlyingBall(game, deltaTime) {
    const ball = game.flyingBall;
    if (!!ball) {
        ball.x += ball.speedX;
        ball.y += ball.speedY;
        if (ball.x <= ball.r) {
            ball.x = 2 * ball.r - ball.x;
            ball.speedX = -ball.speedX;
        }
        else if (ball.x >= game.width - ball.r) {
            ball.x = 2 * game.width - ball.x - 2 * ball.r;
            ball.speedX = -ball.speedX;
        }
        if (ball.y <= ball.r) {
            ball.y = ball.r;
            game.balls.push(ball);
            game.flyingBall = null;
        }
        const ballsIntersects = checkBallsIntersection(ball, game.balls);
        if (ballsIntersects.length > 0) {
            game.balls.push(fixball(ball, ballsIntersects));
            game.flyingBall = null;
        }
        return game;
    }
    else {
        return game;
    }
}
function checkBallsIntersection(ball, balls) {
    return balls.filter(b => {
        if (Math.abs(b.x - ball.x) > ballDiametr || Math.abs(b.y - ball.y) > ballDiametr) {
            return false;
        }
        else if (Math.pow(b.x - ball.x, 2) + Math.pow(b.y - ball.y, 2) <= ballSquareDiametr) {
            return true;
        }
        else {
            return false;
        }
    });
}
function fixball(ball, balls) {
    return ball;
}
export function drawGame(ctx, game) {
    ctx.save();
    drawGun(ctx, game.gun);
    drawBalls(ctx, game.flyingBall, game.balls);
    drawUI(ctx, game);
    ctx.restore();
    return {};
}
function isWin(game) {
    return game.score.score >= game.score.winningScore;
}
function drawBalls(ctx, flyingBall, balls) {
    balls.forEach(ball => drawBall(ctx, ball));
    if (!!flyingBall) {
        drawBall(ctx, flyingBall);
    }
    return {};
}
function drawUI(ctx, game) {
    ctx.save();
    ctx.fillStyle = game.ui.color;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    ctx.shadowColor = 'black';
    ctx.font = game.ui.fontSize + 'px ' + game.ui.fontFamily;
    // очки
    ctx.fillText('Score: ' + game.score.score, 20, 40);
    // сообщения о победе или проигрыше
    if (game.gameOver) {
        ctx.textAlign = 'center';
        let message1;
        let message2;
        if (isWin(game)) {
            message1 = 'Победа!';
            message2 = 'Отличная работа!';
        }
        else {
            message1 = 'Попробуй еще раз!';
            message2 = 'В следующий раз все получится!';
        }
        ctx.font = '70px ' + game.ui.fontFamily;
        ctx.fillText(message1, game.width * 0.5, game.height * 0.5 - 20);
        ctx.font = '25px ' + game.ui.fontFamily;
        ctx.fillText(message2, game.width * 0.5, game.height * 0.5 + 20);
    }
    ctx.restore();
    return {};
}
