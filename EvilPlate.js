class EvilPlate{
    constructor(game){
        this.game = game;
        this.width = 70;
        this.height = 70;
        this.image = document.getElementById("plate");
        this.spawnTime = new Date().getTime();
    }

    update(dt){

        let t = (new Date().getTime() - this.spawnTime);
        this.y += (dt/1000) * 100 + t * (dt/1000) * (9.8/100);

    }
}