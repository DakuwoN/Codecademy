// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}
// console.log(returnRandBase());

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}
// console.log(mockUpStrand())

// Factory function, in order to create multiple objects 
const pAequorFactory = (number, array) => {
  return {
    _specimenNum: number,
    _dna: array,
    mutate() {
      const randomBase = Math.floor(Math.random() * this._dna.length);
      let currentBase = this._dna[randomBase];
      let newBase; // Placeholder for the new base 
      do {
        newBase = returnRandBase(); // Assigns a new random base 
      } while (newBase === currentBase); // Ensures the new base is different
      this._dna[randomBase] = newBase; // Replaces the DNA base 
      return this._dna;
    },
    compareDNA(pAequorObj) {
      let sameBase = 0;
      for (let i = 0; i < this._dna.length; i++){
        if (this._dna[i] === pAequorObj._dna[i]){
          sameBase++;
        }
      }
      // console.log(sameBase)
      const percentage = (sameBase / this._dna.length) * 100;
      console.log(`Specimen #${this._specimenNum} and Specimen #${pAequorObj._specimenNum} have ${percentage.toFixed()}% DNA in common.`);
    },
    willLikelySurvive() {
      const countCG = this._dna.filter(base => base === 'C' || base === 'G').length;
      const percentage = (countCG / this._dna.length) * 100;
      return percentage >= 60;
    }  
  };
};

const createSurvivableAequorInstances = () => {
  const survivableInstances = [];
  let specimenNum = 1;

  while (survivableInstances.length < 30) {
    const dnaArray = mockUpStrand();
    const pAequor = pAequorFactory(specimenNum, dnaArray);

    if (pAequor.willLikelySurvive()) {
      survivableInstances.push(pAequor);
    }
    specimenNum++;
  }
  return survivableInstances;
}



const sampleOrganism1 = pAequorFactory(1, mockUpStrand());
const sampleOrganism2 = pAequorFactory(2, mockUpStrand());

console.log("Original DNA of Organism 1:", sampleOrganism1._dna.join(''));
console.log("Original DNA of Organism 2:", sampleOrganism2._dna.join(''));

console.log(sampleOrganism1.compareDNA(sampleOrganism2));

// Create a pAequor instance
const pAequorInstance = pAequorFactory(1, ['A', 'T', 'C', 'G', 'C', 'G', 'A', 'T']);

// Test the willLikelySurvive method
const canSurvive = pAequorInstance.willLikelySurvive();

if (canSurvive) {
  console.log('This pAequor instance can likely survive.');
} else {
  console.log('This pAequor instance is less likely to survive.');
}










