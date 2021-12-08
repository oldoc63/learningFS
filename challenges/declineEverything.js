// Write a function declineEverything() that takes in an array of strings, and, using .forEach() loops through each element in teh array and calls politelyDecline() with each of them.

const politelyDecline = veg => {
	console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

const declineEverything = array => {
	array.forEach(veggie => politelyDecline(veggie))
}

const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

declineEverything(veggies);
