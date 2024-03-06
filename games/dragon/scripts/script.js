import { player } from "./player.js";
import { createGame, drawGame, updateGame } from "./game.js";
import * as ih from "./input-handler.js";
const gameFiledWidth = 1500;
const gameFiledHeight = 500;
const ammoStartSize = 20;
window.addEventListener('load', function () {
    const canvas = this.document.querySelector("#gameCanvas");
    canvas.width = gameFiledWidth;
    canvas.height = gameFiledHeight;
    const ctx = canvas.getContext("2d");
    const game = createGame(canvas.width, canvas.height, player, ammoStartSize);
    ih.initListener(game.keys, game.shootKey);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGame(ctx, game);
        updateGame(game);
        requestAnimationFrame(animate);
    }
    animate();
});
