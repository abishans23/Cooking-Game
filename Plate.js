
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;

        document.addEventListener("keydown", (e) => {
            console.log(e);
        });

    }

    update(){
        this.x -= 1;
    }

        


   



}