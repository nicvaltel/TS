export type IO = {};

export interface Actor {
    x: number;
    y: number;
    width: number;
    height: number;
}

export enum Keys {
    Left,
    Right,
    Fire
}

export type UserInput = {
    inputKeys: Set<Keys>;
}

export type Score = {
    score: number;
    winningScore: number;
}

export function drawActor(ctx: CanvasRenderingContext2D, actor: Actor): IO {
    ctx.fillRect(actor.x, actor.y, actor.width, actor.height);
    return {};
}

export function emptyUserInput(): UserInput {
    return {
        inputKeys: new Set<Keys>,
    }
}

export function cloneUserInput(inputBuffer: UserInput): UserInput {
    return {
        inputKeys: new Set(inputBuffer.inputKeys),
    }
}

export function checkCollision(rect1: Actor, rect2: Actor): boolean {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect2.x < rect1.x + rect1.width &&
        rect1.y < rect2.y + rect2.height &&
        rect2.y < rect1.y + rect1.height);
}

export function initialScore(): Score {
    return {
        score: 0,
        winningScore: 30,
    }
}