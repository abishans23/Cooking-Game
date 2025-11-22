class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

    }
}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas, canvas.getContext("2d"));

}


//function to move the mouse