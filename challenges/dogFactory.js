const dogFactory = (name, breed, weight) => {
	return {
		_name: name,
		_breed: breed,
		_weight: weight,
		get name() {
			return this.name;
		},
		set name(newName) {
			this._name = newName;
		},
		get breed() {
			return this.breed;
		},
		set breed(newBreed) {
			this._breed = newBreed;
		},
		get weight() {
			return this._weight;
		},
		set weight(newWeight) {
			this._weight = newWeight;
		},
		bark() {
			return 'ruff! ruff!'
		},
		eatTooManyTreats() {
			this._weight++
		}
	}
}

dogFactory('Joe', 'Pug', 27);
