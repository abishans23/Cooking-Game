const keys = ["q", "e"];
const foodTypes = ["bottom bun", "lettuce", "cheese", "tomatoes", "patty", "top bun"];

class Food {
    constructor(game, key, type, sprite){
        this.game = game;
        this.key = key;
        this.type = type;
        this.sprite = sprite;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    update(dt){
        
    }
}