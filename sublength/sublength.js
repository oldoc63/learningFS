const subLength = (word, l) => {
	let letters = [];
	for (let l in word) {
		letters.push(word[l].toLowerCase());
	}
	let a = letters.indexOf(l)
	let b = letters.indexOf(l, a + 1)
	let dup = letters.indexOf(l, b + 1)
	if (a != -1 && dup == -1) {
		let c = b - a + 1
		return c
	} else {
		return 0
	}
}

console.log(subLength('supercalifragalisticespialadocious', 'p'));
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0
