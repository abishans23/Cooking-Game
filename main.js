class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        let platex = 100;
        let platey = 550;
        this.plate = new Plate(this, platex, platey);
    }

    render(){
        this.context.drawImage(this.plate.image, this.plate.x, this.plate.y, 100, 100);
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


    game.render();



}


//function to move the mouse