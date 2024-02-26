var StoneColor;
(function (StoneColor) {
    StoneColor[StoneColor["Black"] = 0] = "Black";
    StoneColor[StoneColor["White"] = 1] = "White";
})(StoneColor || (StoneColor = {}));
;
var gameConfig = {
    htmlCanvasName: 'goBoard',
    backgroundPath: 'images/wood_full_original.jpg',
    blackStonePath: 'images/black_00.png',
    whiteStonePath: 'images/white_00.png',
    boardSize: 19,
};
function initGame(cfg) {
    var canvas = document.getElementById(cfg.htmlCanvasName);
    var visibleCtx;
    var visibleCtxMaybe = canvas.getContext('2d');
    if (visibleCtxMaybe !== null) {
        visibleCtx = visibleCtxMaybe;
    }
    else {
        throw new Error("draw-board initGame: visibleCtxMaybe in null");
    }
    var bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = canvas.width;
    bufferCanvas.height = canvas.height;
    var bufferCanvasCtxMaybe = bufferCanvas.getContext('2d');
    var bufferCanvasCtx;
    if (bufferCanvasCtxMaybe !== null) {
        bufferCanvasCtx = bufferCanvasCtxMaybe;
    }
    else {
        throw new Error("draw-board initGame: bufferCanvasCtxMaybe in null");
    }
    var background = new Image();
    background.src = cfg.backgroundPath;
    var blackStone = new Image();
    blackStone.src = cfg.blackStonePath;
    var whiteStone = new Image();
    whiteStone.src = cfg.whiteStonePath;
    // Handle image loading
    background.onload = function () {
        blackStone.onload = function () { };
        whiteStone.onload = function () { };
    };
    var canvases = {
        canvas: canvas,
        visibleCtx: visibleCtx,
        bufferCanvas: bufferCanvas,
        ctx: bufferCanvasCtx,
    };
    var assets = {
        backgroundImg: background,
        blackStoneImg: blackStone,
        whiteStoneImg: whiteStone,
    };
    var gameState = {
        stoneX: 0,
        stoneY: 0,
        gridSize: canvas.width / (cfg.boardSize + 1),
        borderSize: canvas.width / (cfg.boardSize + 1),
        boardSize: cfg.boardSize,
        mouseX: -1000,
        mouseY: -1000,
        canvases: canvases,
        assets: assets,
        gameLoopId: null,
    };
    document.addEventListener('mousemove', function (event) {
        // Retrieve the mouse cursor coordinates from the event object
        var canvasRect = gameState.canvases.canvas.getBoundingClientRect();
        gameState.mouseX = event.clientX - canvasRect.left; // X-coordinate relative to the viewport
        gameState.mouseY = event.clientY - canvasRect.top; // Y-coordinate relative to the viewport
        // Log or use the cursor coordinates
        console.log("Mouse X: ".concat(gameState.mouseX, ", Mouse Y: ").concat(gameState.mouseY));
    });
    return gameState;
}
// Draw grid lines
function drawGrid(state) {
    var ctx = state.canvases.ctx;
    var borderSize = state.borderSize;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    for (var i = 0; i <= state.boardSize; i++) {
        var pos = i * state.gridSize;
        // Vertical lines
        ctx.beginPath();
        ctx.moveTo(pos, borderSize);
        ctx.lineTo(pos, state.canvases.canvas.height - borderSize);
        ctx.stroke();
        // Horizontal lines
        ctx.beginPath();
        ctx.moveTo(borderSize, pos);
        ctx.lineTo(state.canvases.canvas.width - borderSize, pos);
        ctx.stroke();
    }
    // Draw star points (for a 19x19 board)
    if (state.boardSize === 19) {
        var starPoints_1 = [3 + 1, 9 + 1, 15 + 1];
        ctx.fillStyle = 'black';
        starPoints_1.forEach(function (x) {
            starPoints_1.forEach(function (y) {
                var centerX = x * state.gridSize;
                var centerY = y * state.gridSize;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
                ctx.fill();
            });
        });
    }
}
function placeStone(state, x, y, color) {
    var gridSize = state.canvases.canvas.width / (state.boardSize + 1);
    var borderSize = gridSize;
    var coordX = (x - 1) * gridSize - gridSize / 2 + borderSize;
    var coordY = (y - 1) * gridSize - gridSize / 2 + borderSize;
    var image = color == StoneColor.Black ? state.assets.blackStoneImg : state.assets.whiteStoneImg;
    state.canvases.ctx.drawImage(image, coordX, coordY, gridSize, gridSize);
}
function drawBackground(state) {
    state.canvases.ctx.drawImage(state.assets.backgroundImg, 0, 0, state.canvases.canvas.width, state.canvases.canvas.height);
}
function findNearestToMouseCoord(state) {
    var mouseX = state.mouseX, mouseY = state.mouseY;
    var canvas = state.canvases.canvas;
    if (mouseX < 0 || mouseY < 0 || mouseX > canvas.width || mouseY > canvas.height) {
        return null;
    }
    else {
        var nx = Math.round((mouseX - state.borderSize) / state.gridSize);
        var ny = Math.round((mouseY - state.borderSize) / state.gridSize);
        if (nx >= 0 && ny >= 0 && nx < state.boardSize && ny < state.boardSize) {
            var x = nx * state.gridSize + state.borderSize - state.gridSize / 2;
            var y = ny * state.gridSize + state.borderSize - state.gridSize / 2;
            return [x, y];
        }
        else {
            return null;
        }
    }
}
function drawStoneNearMouse(state) {
    var maybeNeares = findNearestToMouseCoord(state);
    if (!maybeNeares) {
        return;
    }
    else {
        var x = maybeNeares[0], y = maybeNeares[1];
        state.canvases.ctx.drawImage(state.assets.blackStoneImg, x, y, state.gridSize, state.gridSize);
    }
}
function gameLoop(state) {
    var stoneX = state.stoneX, stoneY = state.stoneY;
    drawBackground(state);
    // state.canvases.ctx.drawImage(state.assets.backgroundImg, 0, 0, state.canvases.canvas.width, state.canvases.canvas.height);
    drawGrid(state);
    placeStone(state, 10, 10, StoneColor.Black);
    placeStone(state, 1, 1, StoneColor.White);
    placeStone(state, 19, 19, StoneColor.White);
    placeStone(state, 1, 19, StoneColor.White);
    placeStone(state, 19, 1, StoneColor.White);
    state.canvases.ctx.drawImage(state.assets.blackStoneImg, stoneX, stoneY, state.gridSize, state.gridSize);
    drawStoneNearMouse(state);
    // state.canvases.ctx.drawImage(state.assets.blackStoneImg, state.mouseX , state.mouseY, state.gridSize, state.gridSize);
    state.canvases.visibleCtx.drawImage(state.canvases.bufferCanvas, 0, 0);
    state.stoneX = stoneX + 1;
}
function startGameLoop(state) {
    if (!state.gameLoopId) {
        state.gameLoopId = setInterval(function () {
            gameLoop(state);
        }, 1000 / 60); // Set the desired frame rate (e.g., 60 FPS)
    }
}
var gameState = initGame(gameConfig);
startGameLoop(gameState);
