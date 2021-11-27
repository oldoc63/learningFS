const monsterFactory = (name, age, energySource, catchPhrase) => {
	return {
		name: name,
		age: age,
		energySource: energySource,
		scare () {
			console.log(catchPhrase);
		}
	}

};

const ghost = monsterFactory('Ghouli', 251, 'ectoplasm', 'BOO!');
