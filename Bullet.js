export default class Bullet {
    // colors = [
    //     'red',
    //     'blue',
    //     'red',
    //     'green',
    //     'white',
    //     'yellow',
    //     'orange',
    //     'purple',
    //     'white',
    //     'pink',
    //     'brown',
    //     'grey',
    // ];

    constructor(x, y, speed, damage) {

        this.x = x;
        this.y = y;
        this.speed = speed;
        this.damage = damage;

        this.width = 5;
        this.height = 15;
        this.color = 'blue';
        // this.color = this.colors[Math.floor(Math.random() * this.colors.length)]
    }

    draw(context) {
        context.fillStyle = this.color;
        this.y -= this.speed;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(enemy) {
        if (
            this.x < enemy.x + enemy.width && 
            this.x + this.width > enemy.x &&
            this.y < enemy.y + enemy.height &&
            this.y + this.height > enemy.y
        ) {
            enemy.takeDamage(this.damage);
            return true;
        }
        return false;
    }
}