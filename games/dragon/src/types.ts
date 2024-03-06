export type IO = {};


export interface Actor {
    x : number;
    y : number;
    width : number;
    height : number;
}

export function drawActor(ctx: CanvasRenderingContext2D, actor: Actor): IO {
    ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
    return {};
}

export type ShootKey = {
    shootFlag : boolean;
}