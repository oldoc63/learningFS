const vampire = {
	name: 'Dracula',
	residence: 'Transilvania',
	preferences: {
		day: 'stay inside',
		night: 'satisfy appetite'
	}
};

//const residence = vampire.residence;

const {residence} = vampire;
console.log(residence);

const {day} = vampire.preferences;
console.log(day);
