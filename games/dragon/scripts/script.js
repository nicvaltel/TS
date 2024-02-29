import { player } from "./player.js";
import { createGame, drawGame, updateGame } from "./game.js";
import * as ih from "./input-handler.js";
const gameFiledWidth = 1500;
const gameFiledHeight = 500;
window.addEventListener('load', function () {
    const canvas = this.document.querySelector("#gameCanvas");
    canvas.width = gameFiledWidth;
    canvas.height = gameFiledHeight;
    const ctx = canvas.getContext("2d");
    const game = createGame(canvas.width, canvas.height, player);
    ih.initListener(game.keys);
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGame(ctx, game);
        updateGame(game);
        requestAnimationFrame(animate);
    }
    animate();
    console.log("Salam!!!");
});
// const canvas : HTMLCanvasElement = document.querySelector("#gameCanvas")!;
// const width =  window.innerWidth;
// const height = window.innerHeight;
// canvas.width = width;
// canvas.height = height;
// const ctx = canvas.getContext("2d")!;
// ctx.fillStyle = "rgb(0 0 255)";
// ctx.fillRect(0, 0, width, height);
