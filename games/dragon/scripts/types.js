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
