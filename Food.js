const keys = ["q", "e"];
const foodTypes = [];

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
}