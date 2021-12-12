// Write function below
const groceries = list => {
  let listString = ''

  for (let i=0; i<list.length; i++) {
    listString += list[i].item;
	//console.log(listString)  
    if (i < list.length - 2) {

	  //console.log(listString)  
      listString += ', ';
	  //console.log(listString)
    } else if (i == list.length - 2){
		//console.log(listString)
		listString += ' and ';
		//console.log(listString)
    }
  }
  
  return console.log(listString);
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
