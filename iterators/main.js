// (1) numbers is an array that contains numbers
const numbers = [1, 2, 4, 10];

// (2) summedNums is a variable that stores the returned value of invoking .reduce()

// (3) numbers.reduce calls the .reduce() method on the numbers array and takes in a callback function as an argument.

const summedNums = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
})

// (4) The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the current value starts as the second element.

console.log(summedNums);

// The .reduce method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function).

const numbers2 = [1, 2, 4, 10];

const summedNums2 = numbers2.reduce((accumulator, currentValue) => {
	return accumulator + currentValue}, 100) // <- Second argument for .reduce

console.log(summedNums2);
