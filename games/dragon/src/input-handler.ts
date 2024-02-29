export function initListener(keys: string[]) {
    window.addEventListener('keydown', (e:KeyboardEvent) => {
        if (((e.key === 'ArrowUp') || (e.key === 'ArrowDown')) && keys.indexOf(e.key) === -1) {
            keys.push(e.key);
        }
    });
    window.addEventListener('keyup', (e:KeyboardEvent) => {
        if (keys.indexOf(e.key) > -1) {
            keys.splice(keys.indexOf(e.key),1);
        }
    });
}