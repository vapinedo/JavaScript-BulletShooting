export default class Enemy {
    constructor(x, y, color, health) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.health = health;
        this.width = 50;
        this.height = 50;        
    }

    draw(context) {
        context.fillStyle = this.color;
        if (this.health > 1) {
            context.strokeStyle = 'white';
        } else {
            context.strokeStyle = 'this.color';
        }

        context.fillRect(this.x, this.y, this.width, this.height);
        context.strokeRect(this.x, this.y, this.width, this.height);

        // Draw text
        context.fillStyle = 'black';
        context.font = '25px Arial';
        context.fillText(this.health, (this.x + this.width / 3.5), (this.y + this.height / 1.5));
    }

    takeDamage(damage) {
        this.health -= damage;
    }
}