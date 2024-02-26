enum StoneColor {
    Black,
    White,
}

interface GameConfig {
    htmlCanvasName: string,
    backgroundPath: string,
    blackStonePath: string,
    whiteStonePath: string,
    boardSize: number,
};

const gameConfig: GameConfig = {
    htmlCanvasName: 'goBoard',
    backgroundPath: 'images/wood_full_original.jpg',
    blackStonePath: 'images/black_00.png',
    whiteStonePath: 'images/white_00.png',
    boardSize: 19,
}

interface GameAssets {
    backgroundImg: HTMLImageElement,
    blackStoneImg: HTMLImageElement,
    whiteStoneImg: HTMLImageElement,
}

interface Canvases {
    canvas: HTMLCanvasElement;
    visibleCtx : CanvasRenderingContext2D;
    bufferCanvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
}

interface GameState {
    stoneX: number,
    stoneY: number,
    gridSize: number,
    borderSize: number,
    boardSize: number,
    mouseX: number,
    mouseY: number,
    canvases: Canvases,
    assets: GameAssets,
    gameLoopId: number | null,
}

function initGame(cfg: GameConfig): GameState {

    const canvas = document.getElementById(cfg.htmlCanvasName) as HTMLCanvasElement;
    var visibleCtx: CanvasRenderingContext2D;
    const visibleCtxMaybe = canvas.getContext('2d');
    if (visibleCtxMaybe !== null) {
        visibleCtx = visibleCtxMaybe;
    } else {
        throw new Error("draw-board initGame: visibleCtxMaybe in null");
    }

    

    const bufferCanvas = document.createElement('canvas');
    bufferCanvas.width = canvas.width;
    bufferCanvas.height = canvas.height;

    const bufferCanvasCtxMaybe = bufferCanvas.getContext('2d');
    var bufferCanvasCtx: CanvasRenderingContext2D;
    if (bufferCanvasCtxMaybe !== null) {
        bufferCanvasCtx = bufferCanvasCtxMaybe;
    } else {
        throw new Error("draw-board initGame: bufferCanvasCtxMaybe in null");
    }

    const background = new Image();
    background.src = cfg.backgroundPath;

    const blackStone = new Image();
    blackStone.src = cfg.blackStonePath;

    const whiteStone = new Image();
    whiteStone.src = cfg.whiteStonePath;

    // Handle image loading
    background.onload = () => {
        blackStone.onload = () => { }
        whiteStone.onload = () => { }
    };


    const canvases: Canvases = {
        canvas: canvas,
        visibleCtx: visibleCtx,
        bufferCanvas: bufferCanvas,
        ctx: bufferCanvasCtx,
    }

    const assets: GameAssets = {
        backgroundImg: background,
        blackStoneImg: blackStone,
        whiteStoneImg: whiteStone,
    }

    const gameState: GameState = {
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
    }

    document.addEventListener('mousemove', (event: MouseEvent) => {
        // Retrieve the mouse cursor coordinates from the event object
        const canvasRect = gameState.canvases.canvas.getBoundingClientRect();
        gameState.mouseX = event.clientX - canvasRect.left; // X-coordinate relative to the viewport
        gameState.mouseY = event.clientY - canvasRect.top; // Y-coordinate relative to the viewport
    
        // Log or use the cursor coordinates
        console.log(`Mouse X: ${gameState.mouseX}, Mouse Y: ${gameState.mouseY}`);
    });

    return gameState
}


// Draw grid lines
function drawGrid(state: GameState) {
    const ctx = state.canvases.ctx;
    const borderSize = state.borderSize

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    for (let i = 0; i <= state.boardSize; i++) {
        const pos = i * state.gridSize;

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
        const starPoints = [3 + 1, 9 + 1, 15 + 1];
        ctx.fillStyle = 'black';

        starPoints.forEach(x => {
            starPoints.forEach(y => {
                const centerX = x * state.gridSize;
                const centerY = y * state.gridSize;
                ctx.beginPath();
                ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
                ctx.fill();
            });
        });
    }
}

function placeStone(state: GameState, x: number, y: number, color: StoneColor) {
    const gridSize = state.canvases.canvas.width / (state.boardSize + 1);
    const borderSize = gridSize;

    const coordX = (x - 1) * gridSize - gridSize / 2 + borderSize;
    const coordY = (y - 1) * gridSize - gridSize / 2 + borderSize;

    const image = color == StoneColor.Black ? state.assets.blackStoneImg : state.assets.whiteStoneImg
    state.canvases.ctx.drawImage(image, coordX, coordY, gridSize, gridSize);
}


function drawBackground(state: GameState){
    state.canvases.ctx.drawImage(state.assets.backgroundImg, 0, 0, state.canvases.canvas.width, state.canvases.canvas.height);
}


function findNearestToMouseCoord(state: GameState): [number, number] | null {
    const {mouseX, mouseY} = state;
    const canvas = state.canvases.canvas

    if (mouseX < 0 || mouseY < 0 || mouseX > canvas.width || mouseY > canvas.height){
        return null
    } else {
        const nx = Math.round((mouseX - state.borderSize)/state.gridSize);
        const ny = Math.round((mouseY - state.borderSize)/state.gridSize);
        if (nx >= 0 && ny >= 0 && nx < state.boardSize && ny < state.boardSize){
            const x = nx * state.gridSize + state.borderSize - state.gridSize/2;
            const y = ny * state.gridSize + state.borderSize - state.gridSize/2;
            return [x,y];
        } else {
            return null;
        }
    }
}

function drawStoneNearMouse(state: GameState){
    const maybeNeares = findNearestToMouseCoord(state);
    if (!maybeNeares){
        return
    } else {
        const [x,y] = maybeNeares;
        state.canvases.ctx.drawImage(state.assets.blackStoneImg, x , y, state.gridSize, state.gridSize);
    }
}

function gameLoop(state: GameState): void {
    const { stoneX, stoneY} = state;

    drawBackground(state);
    // state.canvases.ctx.drawImage(state.assets.backgroundImg, 0, 0, state.canvases.canvas.width, state.canvases.canvas.height);
    drawGrid(state);
    placeStone(state, 10, 10, StoneColor.Black);
    placeStone(state, 1, 1, StoneColor.White);
    placeStone(state, 19, 19, StoneColor.White);
    placeStone(state, 1, 19, StoneColor.White);
    placeStone(state, 19, 1, StoneColor.White);

    state.canvases.ctx.drawImage(state.assets.blackStoneImg, stoneX , stoneY, state.gridSize, state.gridSize);
    drawStoneNearMouse(state);
    // state.canvases.ctx.drawImage(state.assets.blackStoneImg, state.mouseX , state.mouseY, state.gridSize, state.gridSize);

    state.canvases.visibleCtx.drawImage(state.canvases.bufferCanvas, 0, 0);
    
    state.stoneX = stoneX + 1;
    
}

function startGameLoop(state: GameState): void {
    if (!state.gameLoopId) {
        state.gameLoopId = setInterval(() => {
            gameLoop(state);
        }, 1000 / 60); // Set the desired frame rate (e.g., 60 FPS)
    }
}

const gameState = initGame(gameConfig);
startGameLoop(gameState)


