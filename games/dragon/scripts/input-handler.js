import { Keys } from "./types.js";
export function initListener(keys, shotKey) {
    window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' && !keys.has(Keys.Up)) {
            keys.add(Keys.Up);
        }
        else if (e.key === 'ArrowDown' && !keys.has(Keys.Down)) {
            keys.add(Keys.Down);
        }
        else if (e.key === ' ') {
            shotKey.shootFlag = true;
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
