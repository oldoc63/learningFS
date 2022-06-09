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

function balloonAttack (p1, p2){
    for(let i=1;i<=10;i++){
        p2.balloonCount -= p1.hitsPerMinute;
        p1.balloonCount -= p2.hitsPerMinute;
        p1.status();
        p2.status();
    }
    
    if(p1.balloonCount > p2.balloonCount){
        return p1.name;
    }else if(p2.balloonCount > p2.balloonCount){
        return p2.name;
    }else{
        return 'Tie'
    }
}