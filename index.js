import { createEnemy } from "./Enemy.js";
import { createPlayer } from "./Player.js";
import { createBulletController } from "./BulletController.js";

const canvas = document.getElementById("gameboard");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bulletController = createBulletController();
const player = createPlayer(canvas.width / 2.2, canvas.height / 1.3, bulletController);

const enemies = [
    createEnemy(50, 20, 'green', 10),
    createEnemy(150, 20, 'red', 10),
    createEnemy(250, 20, 'gold', 10),
    createEnemy(350, 20, 'green', 10),
    createEnemy(450, 20, 'gold', 10),
    createEnemy(50, 100, 'green', 10),
    createEnemy(150, 100, 'red', 10),
    createEnemy(250, 100, 'gold', 10),
    createEnemy(350, 100, 'green', 10),
    createEnemy(450, 100, 'gold', 10),
];

function gameLoop() {
    setCommonStyle();
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    bulletController.draw(context);
    player.draw(context);
    enemies.forEach(enemy => {
        if (bulletController.collideWith(enemy)) {
            if (enemy.health <= 0) {
                const index = enemies.indexOf(enemy);
                enemies.splice(index, 1);
            }
        } else {
            enemy.draw(context);        
        }
    })
}

function setCommonStyle() {
     context.shadowColor = '#D53';
    context.shadowBlur = 20;
    context.lineJoin = 'bevel';
    context.lineWidth = 5;
}

setInterval(() => gameLoop(), 1000 / 60);