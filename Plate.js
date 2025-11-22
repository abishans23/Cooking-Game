
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;

        document.addEventListener("keydown", (e) => {
            console.log(e);
        });

    }

    update(){
        this.x -= 1;
    }

        


   



}