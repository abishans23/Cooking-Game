class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.sprites = [];
        this.food = [];
        this.prevFrame = new Date().getTime();
        this.recipie = this.chooseRecipe();

        let platex = 100;
        let platey = 550;
        this.plate = new Plate(this, platex, platey);
        this.plate.width = 100;
        this.plate.height = 100;
        this.sprites.push(this.plate);
        this.prevSpawn = new Date().getTime();
    }

    async spawnFood(){
        const res = await fetch("./foodData.json");
        const data = await res.json();
        const foodTypes = data["foodTypes"];

        let randomNumber = Math.random();
        let randomFood = Math.floor(Math.random() * foodTypes.length);
        if(randomFood == 7){
            randomFood = 6;
        }
        let foodName = foodTypes[randomFood];

        let newFood = new Food(this, "q", foodName, this.sprites.length);
        this.sprites.push(newFood);
        this.food.push(newFood);
        let foodSprite =  this.sprites[this.sprites.length-1];
        foodSprite.height = newFood.height;
        foodSprite.width = newFood.width;

        foodSprite.x = Math.floor(randomNumber * (this.canvas.width-foodSprite.width));
    
        foodSprite.y = newFood.y;
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

        //delete food if it hits bottom
        for (let i = 0; i < this.food.length; i++){
            if (this.food[i].y > this.canvas.height){
                this.sprites.splice(this.food[i].spriteIndex, 1);
                this.food.splice(i, 1);
                for (let j = i; j < this.food.length; j++){
                    this.food[j].spriteIndex -= 1;
                }
                i--;
            }
        }

        this.prevFrame = newFrame;

        //this.context.fillRect(100, 550, 50, 50);
    }
    
    async chooseRecipe(){
        const res = await fetch("./foodData.json");
        const data = await res.json();
        const foodTypes = data["foodTypes"];
        const recipies = data["recipies"];
        const instructions = document.getElementById("instructions");
        const randomRecipe = recipies[0];
        console.log(randomRecipe.length);

        for (let i = 0; i < randomRecipe.length; i++){
            let img = document.createElement("img");
            img.src = "./images/" + foodTypes[i] + ".png";
            img.width = "100";
            img.id = "TopBun";
            img.style.filter = "Brightness(0)"
            
            instructions.appendChild(img);

        }
    }



}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas);
    canvas.width = 650;
    canvas.height = 650;
    canvas.style.left = "20%";
    canvas.style.top = "5%";

    game.spawnFood();

    function animate(){
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    let cooldown = false;

    addEventListener("keydown", (e)=>{
        if (cooldown) {return;}

        cooldown = true;
        let closestFood = null;
        let minDist = Infinity;
        let foodIndex = Infinity;

        for (let i = 0; i < game.food.length; i++){
            let centerPX = game.plate.x + game.plate.width/2;
            let centerPY = game.plate.y + game.plate.height/2;

            let centerFX = game.food[i].x + game.food[i].width/2;
            let centerFY = game.food[i].y + game.food[i].height/2;

            let dist = Math.sqrt((centerPX - centerFX) * (centerPX - centerFX) + (centerPY - centerFY) * (centerPY - centerFY))

            if (dist < minDist){
                minDist = dist;
                closestFood = game.food[i];
                foodIndex = i;
            }

        }
        
        if (closestFood != null && e.key == game.food[foodIndex].key && minDist < 75){
            game.sprites.splice(game.food[foodIndex].spriteIndex, 1);
            game.food.splice(foodIndex, 1);

            for (let i = foodIndex; i < game.food.length; i++){
                game.food[i].spriteIndex -= 1;
            }
        }

        //can't let player spam keys
        setTimeout(e =>{
            cooldown = false;
        }, 100)
    })

}


//function to move the mouse