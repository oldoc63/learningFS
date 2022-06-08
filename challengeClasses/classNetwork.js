class Network {
    constructor(data, users) {
        this.data = data;
        this.users = users;
    }

    movieTime(){
        if ((this.users * 5) <= (this.data - 10)){
            return true;
        }else{
            return false;
        } 
    }
}

const library = new Network(20, 2) 
console.log(library.movieTime())