class Media {
    constructor (title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }
    get isCheckedOut(){
        return this._isCheckedOut;
    }
    get _ratings(){
        return this._ratings;
    }
    set isCheckedOut(value){
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus(){
        this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating(){
        let ratingSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        return ratingSum / this.ratings.length;
    }
    addRating(value){
        this.ratings.push(value);
    }
}

class Book extends Media {
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runtime){
        super(title);
        this._director = director;
        this._runtime = runtime;
    }
    get director(){
        return this._director;
    }
    get runtime(){
        return this._runtime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Everything', 544);
historyOfEverything.toggleCheckOutStatus();