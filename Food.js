const keys = ["q", "e"];
const foodTypes = ["bottom bun", "lettuce", "cheese", "tomatoes", "patty", "top bun"];

class Food {
    constructor(game, key, type, image){
        this.game = game;
        this.key = key;
        this.type = type;
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    update(dt){
        
    }
}