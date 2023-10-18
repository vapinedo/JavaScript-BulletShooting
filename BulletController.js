import Bullet from "./Bullet.js";

export default class BulletController {
    bullets = [];
    timeTillNextBullet = 0;
    
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay) {
        if (this.timeTillNextBullet <= 0) {
            if (this.bullets.length < 5) {
                this.bullets.push(new Bullet(x, y, speed, damage));
            }
            this.timeTillNextBullet = delay;
        }
        this.timeTillNextBullet--;
    }

    draw(context) {
        this.bullets.forEach(bullet => {
            if (this.isBulletOffScreen(bullet)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            bullet.draw(context)}
        );
    }

    collideWith(enemy) {
        return this.bullets.some(bullet => {
            if (bullet.collideWith(enemy)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
                return true;
            }
            return false;
        })
    }

    isBulletOffScreen(bullet) {
        return bullet.y <= -bullet.height;
    }
}