import { ShootKey } from "./types.js";

export function initListener(keys: string[], shotKey:ShootKey) {
    window.addEventListener('keydown', (e:KeyboardEvent) => {
        if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && keys.indexOf(e.key) === -1) {
            keys.push(e.key);
        } else if(e.key === ' '){
            shotKey.shootFlag = true;
        }
    });
    window.addEventListener('keyup', (e:KeyboardEvent) => {
        if (keys.indexOf(e.key) > -1) {
            keys.splice(keys.indexOf(e.key),1);
        }
    });
}