export default class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
        this.bulletController = bulletController;

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);
    }

    draw(context) {
        this.move();
        context.strokeStyle = 'yellow';
        context.fillStyle = 'black';
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
    }

    shoot() {
        if (this.shooPressed) {
            const speed = 5;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if (this.downPressed) {
            console.log("down");
            this.y += this.speed;
        }
        if (this.upPressed) {
            this.y -= this.speed;
        }
        if (this.leftPressed) {
            this.x -= this.speed;
        }
        if (this.rightPressed) {
            this.x += this.speed;
        }
    }

    keydown = (e) => {
        if(e.code === 'ArrowUp') {
            console.log("arriba");
            this.upPressed = true;
        }
        if(e.code === 'ArrowDown') {
            this.downPressed = true;
        }
        if(e.code === 'ArrowLeft') {
            this.leftPressed = true;
        }
        if(e.code === 'ArrowRight') {
            this.rightPressed = true;
        }
        if (e.code === 'Space') {
            this.shooPressed = true;
        }
    }

    keyup = (e) => {
        if(e.code === 'ArrowUp') {
            this.upPressed = false;
        }
        if(e.code === 'ArrowDown') {
            this.downPressed = false;
        }
        if(e.code === 'ArrowLeft') {
            this.leftPressed = false;
        }
        if(e.code === 'ArrowRight') {
            this.rightPressed = false;
        }
        if (e.code === 'Space') {
            this.shooPressed = false;
        }        
    }
}