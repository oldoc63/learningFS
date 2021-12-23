// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequourFactory = (num, arr) => {
	return {
		specimenNum: num,
		dna: arr,
        mutate() {
			console.log(`Mutating specimen${this.specimenNum}, with bases: ${this.dna}`); // info message
            let randomIndex = Math.floor(Math.random() * this.dna.length);                // random index of the base to change
            console.log("Base to change at index: " + randomIndex);                       // log message of the index to change
            let randomBase = returnRandBase();                                            // random base to replace
            console.log("New random base to insert: " + randomBase);                      // logs the random base to use as replacer
            while (randomBase === this.dna[randomIndex]) {                                      // loop until new random base is diff from the old base
				console.log("The two bases are equal, will generate a new random base");  // logs if random and old base are equal
				randomBase = returnRandBase();                                            // generating a random base
			}
			this.dna.splice(randomIndex, 1, randomBase);                                 // replacing the base with a random one
			console.log(`New dna strand: ${this.dna}`)
		},
		compareDNA(pAequorObj) {                                        // method to compare current organism with the previous one
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (i == 0) {                                               // show the bases of the two organisms just one time each
          console.log(`\nComparing DNA strands\nSpecimen${this.specimenNum} bases: ${this.dna}`);
          console.log(`Specimen${pAequorObj.specimenNum} bases: ${pAequorObj.dna}`);
        }
        if (this.dna[i] === pAequorObj.dna[i]) {                                      // if the two bases are equal
            console.log(this.dna[i] + " and  " + pAequorObj.dna[i] + " are equal");   // print message
            counter += 1;                                                             // increase counter
            console.log("Matching bases so far: " + counter);                         // log the counter
        }
      }
      let basesInCommon = Math.floor((100 / 15) * counter);                           // calculating the % of common bases
			return console.log(`Specimen ${this.specimenNum} and Specimen ${pAequorObj.specimenNum} are ${basesInCommon}% compatible`);
		},
		willLikelySurvive() {                                       // returns true if at least 60% of its bases are C or G
      let counter = 0;           // counter value
        for ( let i = 0; i < this.dna.length; i++ ) {           // looping over bases of caller object
          if ( this.dna[i] == "C" || this.dna[i] == "G" ) {     // if the base if C or G...
            counter += 1;                                       // ...increase counter
          }  
        }
      return (counter >= 9);                             // returns true if at least 9 bases (60%) are "C" or "G"
    },
	complementStrand() {                                 // method to return the complementary DNA strand( A <-> T, C <-> G)
      let complementaryStrand = [];
      for ( let i = 0; i < this.dna.length; i++ ) {      // iterates through the strand bases
        if ( this.dna[i] === "A" ) { complementaryStrand.push("T"); }           // replaces A with T
        else if ( this.dna[i] === "T" ) { complementaryStrand.push("A"); }      // replaces T with A
        else if ( this.dna[i] === "C" ) { complementaryStrand.push("G"); }      // replaces C with G
        else if ( this.dna[i] === "G" ) { complementaryStrand.push("C"); }      // replaces G with C
        else complementaryStrand.push(this.dna[i]);
      }
      return `\n--Generating the complementary DNA strand--\n     Original DNA strand: ${this.dna}
Complementary DNA strand: ${complementaryStrand}`
      }
	}
};

sample1 = pAequourFactory(1, mockUpStrand());
sample2 = pAequourFactory(2, mockUpStrand());
mutated = sample1.mutate();
compare = sample1.compareDNA(sample2);
console.log(sample1.willLikelySurvive());

// method to create 30 specimen that can survive (at least 60% of the dna strand must be C's of G's)
let pool = () => {
  let sampleArray = [];                                // array to contain specimen for which .willLikelySurvive() returns "true"  
  while ( sampleArray.length < 30 ) {                  // loop until adaptingSpecimen array contains 30 elements
  let i = 1;                                           // counter up until 30
  let sample = pAequourFactory(i, mockUpStrand());
    sample = pAequourFactory(i, mockUpStrand());        // generating specimen
    if ( sample.willLikelySurvive() ) {
      sampleArray.push(sample.dna);
    }
    i++;
  }
  return sampleArray;
}

  // creating a pool of 30, surviving specimen
console.log(`--Invoking the pool function (creating a pool of 30 surviving samples)--`)
console.log(pool());

  // creating a sample object
let testSubject = pAequourFactory(1, mockUpStrand());

  // creating a complementary DNA strand to the previous object
console.log(testSubject.complementStrand());

