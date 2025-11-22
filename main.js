class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }

    printStuff() {
        console.log("wwww");
    }

}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas);
    game.printStuff();

}


//function to move the mouse