class Player {
    constructor(name, hitsPerMinute){
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }
    status(){
        console.log(`Player: ${this.name} -- Ballons Left: ${this.balloonCount}`)
    }
}