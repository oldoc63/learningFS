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

};


// Do not write or modify code below this line.
module.exports = _;
