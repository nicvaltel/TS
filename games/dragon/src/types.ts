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

export enum Keys {
    Up,
    Down,
    Fire
}

export type UserInput = {
    inputKeys: Set<Keys>;
    shootKey: boolean;
}

export function emptyUserInput(): UserInput{
    return {
        inputKeys: new Set<Keys>,
        shootKey: false,
    }
}

export function cloneUserInput(inputBuffer: UserInput):UserInput{
    return {
        inputKeys: new Set(inputBuffer.inputKeys),
        shootKey: inputBuffer.shootKey,
    }
}