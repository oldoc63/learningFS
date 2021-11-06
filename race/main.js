let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 58;
if(early && age > 18){
  raceNumber += 1000
}
if(early && age > 18){
  console.log(`The race will start at 9:30 am and your race number is ${raceNumber}.`)
}
else if(!early && age > 18){
  console.log(`The race will start at 11:00 am and your race number is ${raceNumber}.`)
}
else if(age < 18){
  console.log(`The race will start at 12:30 am and your race number is ${raceNumber}.`)
}
else{
  console.log('Approach the registration desk')
}


