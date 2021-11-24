const goat = {
	dietType: 'herbivore',
	makeSound () {
		console.log('baaa');
	},
	diet () {
		console.log(this.dietType);
	}
};

goat.makeSound();
goat.diet();
