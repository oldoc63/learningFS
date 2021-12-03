const jumbledNums =  [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
	return num < 10;
});

/* (1)jumbledNums is an array that contains elements that are numbers. 
 * (2)const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
 * (3)The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
 * (4)num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.
 */
console.log(lessThanTen);
console.log(jumbledNums[3]);

/* (5)If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1. 
 */
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
 
console.log(greaterThan1000);
