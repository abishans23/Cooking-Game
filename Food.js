const keys = ["q", "e"];
const foodTypes1 = ["bottom bun", "lettuce", "cheese", "tomatoes", "patty", "top bun"];
const foodTypes = ["bottomBun", "lettuce"];
const imageTypes = ["Lettuce", "bottomBun"];

class Food {
    constructor(game, key, image, spriteIndex){
        this.game = game;
        this.keyHolder = new Key(key);
        this.image = document.getElementById(image);
        this.width = 100;
        this.height = 100;
        this.x = 0;
        this.y = -40;
        this.spriteIndex = spriteIndex;
        this.spawnTime = new Date().getTime();
    }

    update(dt){
        let t = (new Date().getTime() - this.spawnTime);
        this.y += (dt/1000) * 100 + t * (dt/1000) * (9.8/100); 
        this.keyHolder.y = this.y + (this.height - this.keyHolder.height)/2;
        this.keyHolder.x = this.x + (this.width - this.keyHolder.width)/2;
    }
}

class Key {
    constructor(key){
        this.image = document.getElementById(key);
        this.key = key;
        this.width = 25;
        this.height = 25;
        this.x = 0;
        this.y = 0;
    }

    update(dt){
        return;
    }
}