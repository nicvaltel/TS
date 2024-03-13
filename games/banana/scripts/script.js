import { createGame, drawGame, updateGame } from "./game.js";
import { gameFiledWidth, gameFiledHeight } from "./constants.js";
import * as ih from "./input-handler.js";
window.addEventListener('load', function () {
    const canvas = this.document.querySelector("#gameCanvas");
    canvas.width = gameFiledWidth;
    canvas.height = gameFiledHeight;
    const ctx = canvas.getContext("2d");
    const game = createGame(canvas.width, canvas.height);
    ih.initListener(game.inputBuffer);
    let lastTime = 0;
    function animate(currentTime) {
        const deltaTime = currentTime - lastTime;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGame(ctx, game);
        updateGame(game, deltaTime);
        lastTime = currentTime;
        requestAnimationFrame(animate);
    }
    animate(0);
});
