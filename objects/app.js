const person = {
	_firstName: 'John',
	_lastName: 'Doe',
	get fullname () {
		if (this._firstName && this._lastName) {
			return `${this._firstName} ${this._lastName}`;
		} else {
			return 'Missing a first name or a last name.';
		}
	}
};

// To call the getter method:
person.fullName;
