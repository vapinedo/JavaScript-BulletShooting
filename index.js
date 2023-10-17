import Player from "./Player.js";
import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 600;

const bulletController = new BulletController(canvas);
const player = new Player(canvas.width / 2.2, canvas.height / 1.3, bulletController);

function gameLoop() {
    setCommonStyle();
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    bulletController.draw(context);
    player.draw(context);
}

function setCommonStyle() {
    context.shadowColor = '#D53';
    context.shadowBlur = 20;
    context.lineJoin = 'bevel';
    context.lineWidth = 5;
}

setInterval(() => gameLoop(), 1000 / 60);