//Gets # from 0 -> num - 1
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out an eat', 'not read this', 'play more', 'trust no one']
}
//Store the 'wisdom' in an array
let personalWisdom = []

//Iterate over the object
for(let prop in collectiveWisdom){
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length) 
    personalWisdom.push(optionIdx)  
}
console.log(personalWisdom)