export function initListener(keys) {
    window.addEventListener('keydown', (e) => {
        if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && keys.indexOf(e.key) === -1) {
            keys.push(e.key);
        }
    });
    window.addEventListener('keyup', (e) => {
        if (keys.indexOf(e.key) > -1) {
            keys.splice(keys.indexOf(e.key), 1);
        }
    });
}
