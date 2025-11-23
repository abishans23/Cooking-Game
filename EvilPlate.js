class EvilPlate{
    constructor(game, width){
        this.game = game;
        this.width = width;
        this.height = width*0.6;
        this.image = document.getElementById("evilPlate");
        this.spawnTime = new Date().getTime();
        this.y = 0;
        this.x = 0;
    }

    update(dt){

        let t = (new Date().getTime() - this.spawnTime);
        this.y += (dt/1000) * 100 + t * (dt/1000) * (30/100);

    }
}