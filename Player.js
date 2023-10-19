let Player = {
    x: 0,
    y: 0,
    speed: 4,
    width: 50,
    height: 50,
    bulletController: null,

    upPressed: false,
    downPressed: false,
    leftPressed: false,
    rightPressed: false,
    shootPressed: false,

    draw: function (context) {
        this.move();
        context.strokeStyle = 'yellow';
        context.fillStyle = 'black';
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillRect(this.x, this.y, this.width, this.height);
        this.shoot();
    },

    shoot: function () {
        if (this.shootPressed) {
            const speed = 10;
            const delay = 7;
            const damage = 1;
            const bulletX = this.x + this.width / 2;
            const bulletY = this.y;
            this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    },

    move: function () {
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
    },

    keydown: function (e, player) {
        switch(e.code) {
            case 'ArrowUp':    player.upPressed = true;    break;
            case 'ArrowDown':  player.downPressed = true;  break;
            case 'ArrowLeft':  player.leftPressed = true;  break;
            case 'ArrowRight': player.rightPressed = true; break;
            case 'Space':      player.shootPressed = true; break;
        }
    },

    keyup: function (e, player) {
        switch(e.code) {
            case 'ArrowUp':    player.upPressed = false;    break;
            case 'ArrowDown':  player.downPressed = false;  break;
            case 'ArrowLeft':  player.leftPressed = false;  break;
            case 'ArrowRight': player.rightPressed = false; break;
            case 'Space':      player.shootPressed = false; break;
        }        
    }
}

export function createPlayer(x, y, bulletController) {
    let player = Object.create(Player);
    player.x = x;
    player.y = y;
    player.bulletController = bulletController;
    document.addEventListener('keyup', (e) => Player.keyup(e, Player));
    document.addEventListener('keydown', (e) => Player.keydown(e, Player));

    return player;
}