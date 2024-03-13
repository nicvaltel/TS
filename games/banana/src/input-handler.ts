import { Keys, UserInput } from "./types.js";

export function initListener(inputBuffer: UserInput) {
    const keys = inputBuffer.inputKeys;

    window.addEventListener('keydown', (e: KeyboardEvent) => {
        switch (e.key) {
            case ' ': keys.add(Keys.Fire); break;
            case 'ArrowLeft': keys.add(Keys.Left); break;
            case 'ArrowRight': keys.add(Keys.Right); break;
        }
    });
    window.addEventListener('keyup', (e: KeyboardEvent) => {
        switch (e.key) {
            case ' ': keys.delete(Keys.Fire); break;
            case 'ArrowLeft': keys.delete(Keys.Left); break;
            case 'ArrowRight': keys.delete(Keys.Right); break;
        }
    });
}