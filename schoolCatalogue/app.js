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

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }

}

class High extends School {
    constructor(name, numberOfStudents, sportTeams) {
      super(name, 'high', numberOfStudents);
      this._sportTeams = sportTeams;
    }
    get sportTeams() {
      return this._sportTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(sub);

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportTeams);