class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.sprites = [];
        this.food = [];
        this.prevFrame = new Date().getTime();

        let platex = 100;
        let platey = 550;
        this.plate = new Plate(this, platex, platey);
        this.plate.width = 100;
        this.plate.height = 100;
        this.sprites.push(this.plate);
        this.prevSpawn = new Date().getTime();
    }

    spawnFood(){
        let randomNumber = Math.random();
        let newFood = new Food(this, "q", "lettuce", "Lettuce");
        this.sprites.push(newFood);
        let foodSprite = this.sprites[this.sprites.length-1]
        foodSprite.height = 100;
        foodSprite.width = 100;
        foodSprite.x = Math.floor(randomNumber * (this.canvas.width-foodSprite.width));
    
        foodSprite.y = -40;
        
    }

    render(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let newFrame = new Date().getTime();
        for (let i = 0; i < this.sprites.length; i++){
            //render sprite
            let currentSprite = this.sprites[i];
            
            currentSprite.update(newFrame - this.prevFrame);
    
            this.context.drawImage(currentSprite.image, currentSprite.x, currentSprite.y, currentSprite.width, currentSprite.height);
        }

        if (newFrame - this.prevSpawn > 2000){
            this.spawnFood()
            this.prevSpawn = new Date().getTime();
        }

        this.prevFrame = newFrame;

        //this.context.fillRect(100, 550, 50, 50);
    }

}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas);
    canvas.width = 650;
    canvas.height = 650;
    canvas.style.left = "30%";
    canvas.style.top = "5%";
    game.spawnFood();

    function animate(){
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

}


//function to move the mouse