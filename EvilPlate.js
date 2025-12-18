class EvilPlate{
    constructor(game, width, spriteIndex){
        this.game = game;
        this.width = width;
        this.height = width*0.6;
        this.image = document.getElementById("evilPlate");
        this.spawnTime = new Date().getTime();
        this.y = 0;
        this.x = 0;
        this.spriteIndex = spriteIndex;
    }

    update(dt){

        let t = (new Date().getTime() - this.spawnTime);
        this.y += (dt/1000) * 100 + t * (dt/1000) * ((30+10*(this.game.ordersCompleted-1))/100);

    }
}