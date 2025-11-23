class Plate{
    constructor(game, x, y){
        this.game = game;
        this.image = document.getElementById("plate");
        this.x = x;
        this.y = y;
        // this.width = 0;
        // this.height = 0;
        this.maxSpeed = 400;
        this.vel = 0;
        this.changedDir = 0;
        this.direction = 0;

        document.addEventListener("keydown", (e) => {

           if(e.key == "ArrowLeft"){
            this.changedDir = new Date().getTime();
            this.direction = -1;
          }

          if(e.key == "ArrowRight"){
            this.changedDir = new Date().getTime();
            this.direction = 1;
          }

        });

        document.addEventListener("keyup", (e) => {

           if(e.key == "ArrowLeft"){
            this.changedDir = new Date().getTime();
            this.direction = 0;

          }

          if(e.key == "ArrowRight"){
            this.changedDir = new Date().getTime();
            this.direction = 0;
          }

        });

    }

    update(dt){
      let t = (new Date().getTime() - this.changedDir);
      this.vel += this.direction * (t / 10);

      if (this.direction == 0){
        let prevSign = Math.sign(this.vel);
        this.vel -= (t / 15) * prevSign;
        if (Math.sign(this.vel) != prevSign){
          this.vel = 0;
        }
      }

      if (this.vel > this.maxSpeed){
        this.vel = this.maxSpeed;
      } else if (this.vel < -this.maxSpeed){
        this.vel = -this.maxSpeed;
      }

      this.x += (dt/1000) * this.vel;

      if (this.x < 0){
        this.x = 0;
      }

      if (this.x > this.game.canvas.width - this.width){
        this.x = this.game.canvas.width - this.width
      }
    }
}