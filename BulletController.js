import { createBullet } from "./Bullet.js";

let BulletController2 = {
    bullets: [],
    timeTillNextBullet: 0,

    shoot: function (x, y, speed, damage, delay) {
        if (this.timeTillNextBullet <= 0) {
            let newBullet = createBullet(x, y, speed, damage);
            this.bullets.push(newBullet);
            this.timeTillNextBullet = delay;
        }
        this.timeTillNextBullet--;
    },

    draw: function (context) {
        this.bullets.forEach(bullet => {
            if (this.isBulletOffScreen(bullet)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
            }
            bullet.draw(context)}
        );
    },

    collideWith: function (enemy) {
        return this.bullets.some(bullet => {
            if (bullet.collideWith(enemy)) {
                const index = this.bullets.indexOf(bullet);
                this.bullets.splice(index, 1);
                return true;
            }
            return false;
        })
    },

    isBulletOffScreen: function (bullet) {
        return bullet.y <= -bullet.height;
    }
}

export function createBulletController() {
    let bulleController = Object.create(BulletController2);
    return bulleController;
}