import { Keys, ShootKey } from "./types.js";

export function initListener(keys: Set<Keys>, shotKey:ShootKey) {
    window.addEventListener('keydown', (e:KeyboardEvent) => {
        if (e.key === 'ArrowUp'  && !keys.has(Keys.Up)){
            keys.add(Keys.Up);
        } else if (e.key === 'ArrowDown' && !keys.has(Keys.Down)){
            keys.add(Keys.Down);
        } else if(e.key === ' '){
            shotKey.shootFlag = true;
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