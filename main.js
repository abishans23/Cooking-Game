class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.plate = new Plate(this);
    }

    render(){
        this.context.drawImage(this.plate.image, 100, 550, 100, 100);
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