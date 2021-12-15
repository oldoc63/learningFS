const _ = {

clamp(number,lower,upper){
	const lowerClampedValue = Math.max(number, lower);
	const clampedValue = Math.min(lowerClampedValue, upper);
	return clampedValue;
  },

inRange(number, start, end){
	if(end === undefined){
		end = start
		start = 0
	}
	if(start > end){
		let temp = end
		end = start
		start = temp
	}
	let isInRange = start <= number && number < end
	    return isInRange
	},

words(string){
	words = string.split(' ')
	return words
  },

pad(string, length){
	if(length <= string.length){
		return string;
	}
	let startPaddingLength = Math.floor((length - string.length) / 2);
	let endPaddingLength = length - string.length - startPaddingLength;
	let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
	return paddedString;
 },
	
has(object, key){
	hasValue = object[key];
	if(hasValue === undefined){
		return false;
	}return true;
 },

invert(object){
	let inverted = {};
	for(let key in object){
		const originalValue = object[key];
		inverted = {originalValue : key};
	return inverted;
	}
 },
	
findKey(object, predicate){
	for(let key in object) {
		let value = object[key];
		let predicateReturnValue = predicate(value);
		if(predicateReturnValue){
			return key;
		}
	 }
	undefined
	return undefined;
   },

drop(array, n){
	if(n === undefined){
		n = 1;
	}
	let droppedArray = array.slice(n, array.length);
	return droppedArray;
 },

dropWhile(array, predicate){
	const cb = (element, index) =>{
		return !predicate(element, index, array);
	}
	let dropNumber = array.findIndex(cb);
	let droppedArray = this.drop(array, dropNumber);
	return droppedArray;
 },

};


// Do not write or modify code below this line.
module.exports = _;
