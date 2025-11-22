
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;

    }

    left(dx){
        this.x += dx;
    }

   



}