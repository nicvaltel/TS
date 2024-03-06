import { Keys, UserInput } from "./types.js";

export function initListener(inputBuffer: UserInput) {
    const keys = inputBuffer.inputKeys;
    
    window.addEventListener('keydown', (e:KeyboardEvent) => {
        if (e.key === 'ArrowUp'  && !keys.has(Keys.Up)){
            keys.add(Keys.Up);
        } else if (e.key === 'ArrowDown' && !keys.has(Keys.Down)){
            keys.add(Keys.Down);
        } else if(e.key === ' '){
            inputBuffer.shootKey = true;
        }
    });
    window.addEventListener('keyup', (e:KeyboardEvent) => {
        if (e.key === 'ArrowUp'  && keys.has(Keys.Up)){
            keys.delete(Keys.Up);
        } else if (e.key === 'ArrowDown' && keys.has(Keys.Down)){
            keys.delete(Keys.Down);
        }
    });
}