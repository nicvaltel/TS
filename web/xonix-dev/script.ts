interface Player {
    x: number;
    y: number;
    size: number;
    speed: number;
}

interface Enemy {
    x: number;
    y: number;
    size: number;
    speedx: number;
    speedy: number;
}

interface PressedKeys {
    up: boolean;
    down: boolean;
    left: boolean;
    right: boolean;

}

interface Game {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    player: Player;
    enemies: Enemy[];
    enemyColors: string[];
    score: number;
    gameLoopId: number | null;
    pressedKeys: PressedKeys;
}

function initializeGame(): Game {
    const canvas = document.getElementById('xonixCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const player: Player = {
        x: 50,
        y: 50,
        size: 20,
        speed: 2,
    };

    const pressedKeys : PressedKeys = {
        up: false,
        down: false,
        left: false,
        right: false,
    };

    const enemies: Enemy[] = [
        { x: 200, y: 100, size: 20, speedx: 1,speedy: -1, },
        { x: 100, y: 200, size: 20, speedx: -1,speedy: 1, },
        { x: 300, y: 300, size: 20, speedx: 1,speedy: -1, },
    ];

    const enemyColors: string[] = ['#FF5733', '#33FF57', '#5733FF'];

    const game: Game = {
        canvas,
        ctx,
        player,
        enemies,
        enemyColors,
        score: 0,
        gameLoopId: null,
        pressedKeys,
    };

    // Add event listeners for player input
    document.addEventListener('keydown', (event) => handleKeyDown(event, game));
    document.addEventListener('keyup', (event) => handleKeyUp(event, game));

    return game;
}


// Draw the player character on the canvas
function drawPlayer(game: Game): void {
    const { ctx, player } = game;

    // Clear the previous position of the player
    ctx.clearRect(player.x, player.y, player.size, player.size);

    // Draw the player at the new position
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.size, player.size);
}


// Draw enemies on the canvas
function drawEnemies(game: Game): void {
    const { ctx, enemies, enemyColors } = game;

    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];

        // Clear the previous position of the enemy
        ctx.clearRect(enemy.x, enemy.y, enemy.size, enemy.size);

        // Draw the enemy at the new position with the corresponding color
        ctx.fillStyle = enemyColors[i % enemyColors.length];
        ctx.fillRect(enemy.x, enemy.y, enemy.size, enemy.size);
    }
}


// Move the player character based on input
function movePlayer(game: Game): void {
    const { player } = game;

    let speedx: number = 0;
    let speedy: number = 0;
    if (game.pressedKeys.up){
        speedy = -player.speed
    }
    if (game.pressedKeys.down){
        speedy = player.speed
    }
    if (game.pressedKeys.left){
        speedx = -player.speed
    }
    if (game.pressedKeys.right){
        speedx = player.speed
    }

    
        if (speedx > 0 && player.x + player.size < game.canvas.width){
            player.x += speedx;
        }
        if (speedx < 0 && player.x > 0){
            player.x += speedx;
        }
        if (speedy > 0 && player.y + player.size < game.canvas.height) {
            player.y += speedy;
        }
        if (speedy < 0 && player.y > 0){
            player.y += speedy;
        }   
}


// Move enemies on the canvas
function moveEnemies(game: Game): void {
    const { enemies, canvas } = game;

    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];

        // Update the enemy's position
        enemy.x += enemy.speedx;
        enemy.y += enemy.speedy;

        // Check if the enemy has reached the canvas boundaries
        if (enemy.x + enemy.size > canvas.width || enemy.x < 0) {
            // Reverse the enemy's direction when reaching boundaries
            enemy.speedx = -enemy.speedx;
        }

        // Check if the enemy has reached the canvas boundaries
        if (enemy.y + enemy.size > canvas.height || enemy.y < 0) {
            // Reverse the enemy's direction when reaching boundaries
            enemy.speedy = -enemy.speedy;
        }
    }
}


// Check for collisions between the player and enemies
function checkCollision(game: Game): void {
    const { player, enemies } = game;

    for (let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];

        // Calculate the distance between the player and the enemy
        const dx = player.x - enemy.x;
        const dy = player.y - enemy.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if a collision has occurred
        if (distance < player.size / 2 + enemy.size / 2) {
            // Collision detected - Game over
            gameOver(game);
            return;
        }
    }
}

// Handle player keyboard input
function handleKeyDown(event: KeyboardEvent, game: Game): void {
    const { player } = game;

    // Check the key code of the pressed key
    switch (event.key) {
        case 'ArrowLeft':
        case 'Left':
            // Move left
            game.pressedKeys.left = true;
            break;
        case 'ArrowRight':
        case 'Right':
            // Move right
            game.pressedKeys.right = true;
            break;
        case 'ArrowUp':
        case 'Up':
            // Move up
            game.pressedKeys.up = true;
            break;
        case 'ArrowDown':
        case 'Down':
            // Move down
            game.pressedKeys.down = true;
            break;
        default:
            // Handle other key presses if needed
            break;
    }
}

function handleKeyUp(event: KeyboardEvent, game: Game): void {
    const { player } = game;

    // Check the key code of the released key
    switch (event.key) {
        case 'ArrowLeft':
        case 'Left':
            game.pressedKeys.left = false;
            break;
        case 'ArrowRight':
        case 'Right':
            game.pressedKeys.right = false;
            break;
        case 'ArrowUp':
        case 'Up':
            game.pressedKeys.up = false;
            break;
        case 'ArrowDown':
        case 'Down':
            game.pressedKeys.down = false;
            break;
        default:
            // Handle other key releases if needed
            break;
    }
}


// Start the game loop
function startGameLoop(game: Game): void {
    if (!game.gameLoopId) {
        game.gameLoopId = setInterval(() => {
            // Call your game loop logic here
            gameLoop(game);
        }, 1000 / 60); // Set the desired frame rate (e.g., 60 FPS)
    }
}


// Stop the game loop
function stopGameLoop(game: Game): void {
    if (game.gameLoopId) {
        clearInterval(game.gameLoopId);
        game.gameLoopId = null;
    }
}


// Handle game over condition
function gameOver(game: Game): void {
    // Stop the game loop
    stopGameLoop(game);

    // Clear the canvas
    game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);

    // Display a game over message
    game.ctx.fillStyle = 'red';
    game.ctx.font = '30px Arial';
    game.ctx.fillText('Game Over', game.canvas.width / 2 - 80, game.canvas.height / 2);

    // Optionally, reset player position and score
    game.player.x = game.canvas.width / 2 - game.player.size / 2;
    game.player.y = game.canvas.height / 2 - game.player.size / 2;
    game.score = 0;
}


// Main game loop function
function gameLoop(game: Game): void {
    const { ctx, player, enemies, enemyColors, canvas, score } = game;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw the player
    movePlayer(game);
    drawPlayer(game);

    // Update and draw the enemies
    moveEnemies(game);
    drawEnemies(game);

    // Check for collisions
    checkCollision(game);

    // Optionally, update and display the score
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
}


// Start the game
function startGame(game: Game): void {
    // Initialize player, enemies, score, and other game-related data
    // initializeGameObjects(game);

    // Start the game loop
    startGameLoop(game);
}

// function initializeGameObjects(game: Game): void {
//     // Initialize player
//     game.player = {
//         x: game.canvas.width / 2 - game.player.size / 2,
//         y: game.canvas.height / 2 - game.player.size / 2,
//         size: 20,
//         speed: 2,
//         speedx:0,
//         speedy:0,
//         isMoving: false,
//     };

//     // Initialize enemies
//     game.enemies = [
//         { x: 200, y: 100, size: 20, speedx: 1, speedy: -1 },
//         { x: 100, y: 200, size: 20, speedx: -1, speedy: 1 },
//         { x: 300, y: 300, size: 20, speedx: 1, speedy: -1 },
//     ];

//     // Initialize score
//     game.score = 0;
// }


// Initialize the game and start it
window.addEventListener('load', () => {
    const game = initializeGame();
    startGame(game);
});