export default class Player {
    constructor(x, y, bulletController) {
        this.x = x;
        this.y = y;
        this.speed = 4;
        this.width = 50;
        this.height = 50;
        this.bulletController = bulletController;

        document.addEventListener('keyup', this.keyup);
        document.addEventListener('keydown', this.keydown);
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
        if (this.shootPressed) {
            const speed = 10;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if (this.downPressed) {
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
        switch(e.code) {
            case 'ArrowUp':     this.upPressed = true;    break;
            case 'ArrowDown':   this.downPressed = true;  break;
            case 'ArrowLeft':   this.leftPressed = true;  break;
            case 'ArrowRight':  this.rightPressed = true; break;
            case 'Space':       this.shootPressed = true; break;
        }
    }

    keyup = (e) => {
        switch(e.code) {
            case 'ArrowUp':     this.upPressed = false;    break;
            case 'ArrowDown':   this.downPressed = false;  break;
            case 'ArrowLeft':   this.leftPressed = false;  break;
            case 'ArrowRight':  this.rightPressed = false; break;
            case 'Space':       this.shootPressed = false; break;
        }        
    }
}