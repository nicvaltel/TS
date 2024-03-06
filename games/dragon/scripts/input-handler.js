import { Keys } from "./types.js";
export function initListener(inputBuffer) {
    const keys = inputBuffer.inputKeys;
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && !keys.has(Keys.Up)) {
            keys.add(Keys.Up);
        }
        else if (e.key === 'ArrowDown' && !keys.has(Keys.Down)) {
            keys.add(Keys.Down);
        }
        else if (e.key === ' ') {
            inputBuffer.shootKey = true;
        }
    });
    window.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowUp' && keys.has(Keys.Up)) {
            keys.delete(Keys.Up);
        }
        else if (e.key === 'ArrowDown' && keys.has(Keys.Down)) {
            keys.delete(Keys.Down);
        }
    });
}
