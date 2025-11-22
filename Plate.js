
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;

    }

    left(dx){
        this.x += dx;
    }

   



}