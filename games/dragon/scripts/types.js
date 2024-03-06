export function drawActor(ctx, actor) {
    ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
    return {};
}
export var Keys;
(function (Keys) {
    Keys[Keys["Up"] = 0] = "Up";
    Keys[Keys["Down"] = 1] = "Down";
    Keys[Keys["Fire"] = 2] = "Fire";
})(Keys || (Keys = {}));
export function emptyUserInput() {
    return {
        inputKeys: new Set,
        shootKey: false,
    };
}
export function cloneUserInput(inputBuffer) {
    return {
        inputKeys: new Set(inputBuffer.inputKeys),
        shootKey: inputBuffer.shootKey,
    };
}
