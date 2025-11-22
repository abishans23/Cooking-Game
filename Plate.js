
class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.speed = 25;
        this.vel = 0;

        document.addEventListener("keydown", (e) => {
           
           if(e.key == "ArrowLeft"){
            this.vel = -this.speed;
          }

          if(e.key == "ArrowRight"){
            this.vel = this.speed;
          }

        });

        document.addEventListener("keyup", (e) => {
           
           if(e.key == "ArrowLeft"){
            this.vel = 0;
          }

          if(e.key == "ArrowRight"){
            this.vel = 0;
          }

        });

    }
    
    update(dt){
      
      this.x += (dt/100) * this.vel;
      if (this.x < 0){
        this.x = 0;
      }

      if (this.x > this.game.canvas.width - this.width){
        this.x = this.game.canvas.width - this.width
      }
    }
}