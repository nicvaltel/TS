import { Keys, cloneUserInput, emptyUserInput } from "./types.js";
import { drawPlayer } from "./player.js";
import { createProjectile, drawProjectile } from "./projectile.js";
export function createGame(width, height, player, ammo) {
    return {
        width: width,
        height: height,
        player: player,
        inputBuffer: emptyUserInput(),
        userInput: emptyUserInput(),
        ammo: ammo,
    };
}
export function updateGame(game) {
    game.userInput = cloneUserInput(game.inputBuffer);
    game = updatePlayer(game);
    game.inputBuffer.shootKey = game.userInput.shootKey;
    return game;
}
function updatePlayer(game) {
    const keys = game.userInput.inputKeys;
    const player = game.player;
    if (keys.has(Keys.Up)) {
        player.speedY = -player.maxSpeed;
    }
    else if (keys.has(Keys.Down)) {
        player.speedY = player.maxSpeed;
    }
    else {
        player.speedY = 0;
    }
    player.y += player.speedY;
    if (player.y > game.height - player.height * 0.5) {
        player.y = game.height - player.height * 0.5;
    }
    else if (player.y < -player.height * 0.5) {
        player.y = -player.height * 0.5;
    }
    if (game.userInput.shootKey) {
        game = shootTop(game);
    }
    player.projectiles.forEach(pr => updateProjectile(pr, game.width));
    player.projectiles = player.projectiles.filter(pr => !pr.markedForDeletion);
    return game;
}
function shootTop(game) {
    if (game.ammo > 0) {
        game.player.projectiles.push(createProjectile(game.player.x + 80, game.player.y + 30));
    }
    game.ammo--;
    game.userInput.shootKey = false;
    return game;
}
function updateProjectile(projectile, gameWidth) {
    projectile.x += projectile.speed;
    if (projectile.x > gameWidth * 0.8) {
        projectile.markedForDeletion = true;
    }
    return projectile;
}
export function drawGame(ctx, game) {
    drawPlayer(ctx, game.player);
    game.player.projectiles.forEach(pr => drawProjectile(ctx, pr));
    return {};
}
