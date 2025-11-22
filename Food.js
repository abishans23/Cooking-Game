const keys = ["q", "e"];
const foodTypes = ["bottom bun", "lettuce", "cheese", "tomatoes", "patty", "top bun"];

class Food {
    constructor(game, key, type, image){
        this.game = game;
        this.key = key;
        this.type = type;
        this.image = document.getElementById(image);
        this.width = 100;
        this.height = 100;
        this.y = -40;
       
        
    }

    update(dt){
        
    }
}