// Write a function that takes in an array as an argument and returns a 
// new array with the elements in the reverse order.


const reverseArray = array => {
	reversed = [];
	for (let i = array.length -1; i >= 0; i--) {
		 reversed.push(array[i]);
	}
	return reversed
}
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence));
