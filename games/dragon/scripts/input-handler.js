export function initListener(keys, shotKey) {
    window.addEventListener('keydown', (e) => {
        if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && keys.indexOf(e.key) === -1) {
            keys.push(e.key);
        }
        else if (e.key === ' ') {
            shotKey.shootFlag = true;
        }
    });
    window.addEventListener('keyup', (e) => {
        if (keys.indexOf(e.key) > -1) {
            keys.splice(keys.indexOf(e.key), 1);
        }
    });
}
