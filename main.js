class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
    }
}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame")
    
}