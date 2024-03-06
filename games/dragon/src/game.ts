import { IO, Keys, ShootKey, drawActor } from "./types.js"
import { Player, drawPlayer } from "./player.js"
import { Projectile, createProjectile, drawProjectile } from "./projectile.js";

export type Game = {
    width: number;
    height: number;
    player: Player;
    keys: Set<Keys>;
    shootKey: ShootKey;
    ammo: number;
}

export function createGame(width: number, height: number, player: Player, ammo: number): Game {
    return {
        width: width,
        height: height,
        player: player,
        keys: new Set<Keys>,
        shootKey: { shootFlag: false },
        ammo: ammo,
    }
}

export function updateGame(game: Game): Game {
    game = updatePlayer(game);
    return game;
}

function updatePlayer(game: Game): Game {
    const keys = game.keys;
    const player = game.player;

    if (keys.has(Keys.Up)) {
        player.speedY = -player.maxSpeed;
    } else if (keys.has(Keys.Down)) {
        player.speedY = player.maxSpeed;
    } else {
        player.speedY = 0;
    }


    player.y += player.speedY;

    if (player.y > game.height - player.height * 0.5) {
        player.y = game.height - player.height * 0.5;
    } else if (player.y < -player.height * 0.5) {
        player.y = -player.height * 0.5;
    }

    if (game.shootKey.shootFlag) {
        game = shootTop(game);
    }

    player.projectiles.forEach(pr => updateProjectile(pr, game.width));
    player.projectiles = player.projectiles.filter(pr => !pr.markedForDeletion);

    return game;
}

function shootTop(game: Game): Game {
    if (game.ammo > 0) {
        game.player.projectiles.push(createProjectile(game.player.x + 80, game.player.y + 30));
    }
    game.ammo--;
    game.shootKey.shootFlag = false;
    console.log('SHOOT!!!');
    return game;
}

function updateProjectile(projectile: Projectile, gameWidth: number): Projectile {
    projectile.x += projectile.speed;
    if (projectile.x > gameWidth * 0.8) { projectile.markedForDeletion = true; }
    return projectile;
}

export function drawGame(ctx: CanvasRenderingContext2D, game: Game): IO {
    drawPlayer(ctx, game.player);
    game.player.projectiles.forEach(pr => drawProjectile(ctx,pr));
    return {};
}