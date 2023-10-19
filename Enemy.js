let Enemy = {
    x: 0,
    y: 0,
    health: 1,
    width: 50,
    height: 50,        
    color: 'red',

    draw: function (context) {
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
    },

    takeDamage: function (damage) {
        this.health -= damage;
    }    
}

export function createEnemy(x, y, color, health) {
    let enemy = Object.create(Enemy);
    enemy.x = x;
    enemy.y = y;            
    enemy.color = color;
    enemy.health = health;
    return enemy;
}