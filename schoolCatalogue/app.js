class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(value){
        if (typeof value === 'NaN'){
            console.log('Invalid input: numberOfStudents must be a Number.');
        }else{
            this._numberOfStudents = value;
        }
    }
    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers){
        let myIndex = Math.floor(substituteTeachers.length * Math.random());
        return substituteTeachers[myIndex];
    }
}