const person = {
	_age: 37,
	set age (newAge) {
		if (typeof newAge === 'number') {
			this._age = newAge;
		} else {
			console.log('you must assign a number to age');
		}
	}
};

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
