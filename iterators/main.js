const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {if (animal === 'elephant') {return true;}})

const startsWithS = animals.findIndex(animal => {if (animal[0] === 's') {return true;}})


