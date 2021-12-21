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

const pAquourFactory = (num, arr) => {
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
	}
};

sample1 = pAquourFactory(1, mockUpStrand());
sample2 = pAquourFactory(2, mockUpStrand());
mutated = sample1.mutate();
compare = sample1.compareDNA(sample2);

