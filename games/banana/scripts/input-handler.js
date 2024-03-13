import { Keys } from "./types.js";
export function initListener(inputBuffer) {
    const keys = inputBuffer.inputKeys;
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case ' ':
                keys.add(Keys.Fire);
                break;
            case 'ArrowLeft':
                keys.add(Keys.Left);
                break;
            case 'ArrowRight':
                keys.add(Keys.Right);
                break;
        }
    });
    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case ' ':
                keys.delete(Keys.Fire);
                break;
            case 'ArrowLeft':
                keys.delete(Keys.Left);
                break;
            case 'ArrowRight':
                keys.delete(Keys.Right);
                break;
        }
    });
}
