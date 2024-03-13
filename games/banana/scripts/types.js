export var Keys;
(function (Keys) {
    Keys[Keys["Left"] = 0] = "Left";
    Keys[Keys["Right"] = 1] = "Right";
    Keys[Keys["Fire"] = 2] = "Fire";
})(Keys || (Keys = {}));
export function drawActor(ctx, actor) {
    ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
    return {};
}
export function emptyUserInput() {
    return {
        inputKeys: new Set,
    };
}
export function cloneUserInput(inputBuffer) {
    return {
        inputKeys: new Set(inputBuffer.inputKeys),
    };
}
export function checkCollision(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.width &&
        rect2.x < rect1.x + rect1.width &&
        rect1.y < rect2.y + rect2.height &&
        rect2.y < rect1.y + rect1.height);
}
export function initialScore() {
    return {
        score: 0,
        winningScore: 30,
    };
}
