const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

console.log(words);
console.log(shortWords);

//Observe how words was not mutated, i.e. changed, and shortWords is a new array. 
