
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.speed = 25;

        document.addEventListener("keydown", (e) => {
           
           if(e.key == "ArrowLeft" && this.x >= this.speed){
            this.x -= this.speed;
          }

          if(e.key == "ArrowRight" && this.x <= (this.game.canvas.width - this.speed - this.width)){
            this.x += this.speed;
          }

        });

    }

    

        


   



}