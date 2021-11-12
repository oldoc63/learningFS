const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 6;
      break;
    default:
      return 'Check your code!'
      break;
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday')
  
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
    console.log('Youve got the perfect amount of sleep');
  }
  if(actualSleepHours > idealSleepHours){
    console.log(`You slept more than you should. You must spend those ${actualSleepHours - idealSleepHours} hours studying math!`);
  }
  if(actualSleepHours < idealSleepHours){
    console.log(`You slept less than you should. Go ahead and hit the sack for at least ${idealSleepHours - actualSleepHours} hours. Then study math again!`)
  }
}

calculateSleepDebt()


