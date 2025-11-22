const keys = ["q", "e"];
const foodTypes1 = ["bottom bun", "lettuce", "cheese", "tomatoes", "patty", "top bun"];
const foodTypes = ["bottomBun", "lettuce"];
const imageTypes = ["Lettuce", "bottomBun"];

class Food {
    constructor(game, key, type, image, spriteIndex){
        this.game = game;
        this.key = key;
        this.type = type;
        this.image = document.getElementById(image);
        this.width = 100;
        this.height = 100;
        this.y = -40;
        this.spriteIndex = spriteIndex;
    }

    update(dt){
        this.y += (dt/100) * 10;
    }
}