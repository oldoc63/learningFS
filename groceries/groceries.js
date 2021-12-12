function groceries(arr){
	if(arr.length > 1){
		arrOfItems = [];
		arr.forEach(item => {
			for(let key in item){
				arrOfItems.push(item[key])
			}
		})
		//console.log(arrOfItems);
		let lastItem = arrOfItems.pop(arrOfItems.length-1);
		
		//console.log(arrOfItems);
		arrOfItems.push('and ' + lastItem)
	
		//console.log(arrOfItems);
		let str = arrOfItems.join(', ');

		//console.log(arrOfItems);
		let lastOcurrence = str.lastIndexOf(',');

		//console.log(lastOcurrence);
		str = str.slice(0, lastOcurrence) + str.slice(lastOcurrence + 1);

		//console.log(str);
		return `${str}` ;
	}else{
		let str = arr[0].item;
		
		//console.log(str);
		return str;
	}
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}]));
// returns 'Bread and Butter'
 
console.log(groceries( [{item: 'Cheese Balls'}]));
// returns 'Cheese Balls'
