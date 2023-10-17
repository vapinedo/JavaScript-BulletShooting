import Bullet from "./Bullet.js";

export default class BulletController {
    bullets = [];
    timeTillNextBullet = 0;
    
    constructor(canvas) {
        this.canvas = canvas;
    }

    shoot(x, y, speed, damage, delay) {
        if (this.timeTillNextBullet <=0 ) {
            this.bullets.push(new Bullet(x, y, speed, damage));
            this.timeTillNextBullet = delay;
        }
        this.timeTillNextBullet--;
    }

    draw(context) {
        this.bullets.forEach(bullet => bullet.draw(context))
    }
}