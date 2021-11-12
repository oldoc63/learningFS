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

