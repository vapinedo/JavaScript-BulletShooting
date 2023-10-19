export let Bullet = {
    x: 50,
    y: 100,
    width: 5,
    speed: 5,
    damage: 1,
    height: 15,
    color: 'blue',

    draw: function (context) {
        context.fillStyle = this.color;
        this.y -= this.speed;
        context.fillRect(this.x, this.y, this.width, this.height);
    },

    collideWith: function(enemy) {
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
};

export function createBullet(x, y, speed, damage) {
    let bullet = Object.create(Bullet);
    bullet.x = x;
    bullet.y = y;            
    bullet.speed = speed;
    bullet.damage = damage;
    return bullet;
}