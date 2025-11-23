class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.sprites = [];
        this.food = [];
        this.evilPlate = [];
        this.prevFrame = new Date().getTime();
        this.recipie = this.chooseRecipe();
        this.caughtFood = 0;

        let platex = 100;
        let platey = 550;
        this.plate = new Plate(this, platex, platey);
        this.plate.width = 140;
        this.plate.height = 140;
        this.sprites.push(this.plate);
        this.prevSpawn = new Date().getTime();
    }

    spawnEvilPlate(){
        let randomNumber = Math.random();
        if(randomNumber > 0.8){
            randomNumber/=2;
        }

        let plate = new EvilPlate(this, 180*randomNumber+80);
        this.sprites.push(plate);


        plate.x = Math.floor(randomNumber * (this.canvas.width-plate.width));
    
        plate.y = plate.y-(plate.height/2);

    }

    async spawnFood(){
        const res = await fetch("./foodData.json");
        const data = await res.json();
        const foodTypes = data["foodTypes"];
        const key = ['q','w','e','r'][Math.floor(Math.random() * 5 - 0.0001)];
        console.log(key);

        let randomNumber = Math.random();
        let randomFood = Math.floor(Math.random() * foodTypes.length);
        if(randomFood == 7){
            randomFood = 6;
        }
        let foodName = foodTypes[randomFood];

        let newFood = new Food(this, "q", foodName, this.sprites.length);
        this.sprites.push(newFood);
        this.sprites.push(newFood.keyHolder);
        this.food.push(newFood);

        newFood.height = newFood.height;
        newFood.width = newFood.width;
        newFood.x = Math.floor(randomNumber * (this.canvas.width-newFood.width));
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

        if (newFrame - this.prevSpawn > 1000){
            let randomNumber = Math.random();
            if(randomNumber < 0.7)
                this.spawnFood()
            else
                this.spawnEvilPlate();
            this.prevSpawn = new Date().getTime();
        }

        //delete food if it hits bottom
        for (let i = 0; i < this.food.length; i++){
            if (this.food[i].y > this.canvas.height){
                //splicing two since key sprite has to be deleted too
                this.sprites.splice(this.food[i].spriteIndex, 2);
                this.food.splice(i, 1);
                for (let j = i; j < this.food.length; j++){
                    this.food[j].spriteIndex -= 2;
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
        const recipes = data["recipes"];
        const instructions = document.getElementById("instructions");
        const randomRecipe = recipes[0];

        for (let i = 0; i < this.recipie.length; i++){
            instructions.removeChild(this.recipie[i]);
        }

        this.recipie = [];
        this.caughtFood = 0;

        for (let i = randomRecipe.length-1; i > -1; i--){
            let img = document.createElement("img");
            img.src = "./images/" + foodTypes[i] + ".png";
            img.width = "100";
            img.id = "TopBun";
            img.style.filter = "Brightness(0)"
            img.type = foodTypes[i];

            instructions.appendChild(img);
            this.recipie.push(img);
        }
    }



}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas);

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
        
        if (closestFood != null && e.key == game.food[foodIndex].keyHolder.key && minDist < 75){
            //splicing two since key sprite has to be deleted too
            game.sprites.splice(game.food[foodIndex].spriteIndex, 2);
            game.food.splice(foodIndex, 1);

            for (let i = foodIndex; i < game.food.length; i++){
                game.food[i].spriteIndex -= 2;
            }

            if (game.recipie[game.recipie.length - 1 - game.caughtFood].type == closestFood.image.id){
                game.recipie[game.recipie.length - 1 - game.caughtFood].style.filter = "Brightness(1)"
                game.caughtFood++;
                if (game.caughtFood == game.recipie.length){
                    game.chooseRecipe();
                }
            }
        }

        //can't let player spam keys
        setTimeout(e =>{
            cooldown = false;
        }, 100)
    })

}


//function to move the mouse