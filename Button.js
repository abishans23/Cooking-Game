class Button {
    constructor(game, image, x, y, width, height, clickFunc){
        this.game = game;
        this.image = document.getElementById(image);;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.onClick = (e) => {
            let rect = this.game.canvas.getBoundingClientRect();
            let x = e.x - rect.left;
            let y = e.y - rect.top;

            if (this.x <= x && x <= (this.x + this.width) && this.y <= y && y <= (this.y + this.height)){
                clickFunc();
            }

        }

        this.game.canvas.addEventListener("click", this.onClick);
    }
}