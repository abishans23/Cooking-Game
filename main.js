class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }

    render(){
        this.context.fillStyle = 'red';
        this.context.fillRect(100, 200, 50, 50);
    }


}

window.addEventListener('load', loadGame);

function loadGame(){
    const canvas = document.getElementById("gameFrame");
    const game = new Game(canvas);
    canvas.width = 500;
    canvas.height = 500;

    game.render();



}


//function to move the mouse