const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
    return this.courses.desserts;
  },
  set appetizers (entradas) {
    return this._courses.appetizers = entradas;
  },
  set mains (principal) {
    return this._courses.mains = principal;
  },
  set desserts (postres) {
    return this._courses.desserts = postres;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      dish: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex]; 
 },
  generateRandomMeal () {
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains');
   const dessert = this.getRandomDishFromCourse('desserts');
   const totalPrice = appetizer.price + main.price + dessert.price;
   return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
 }
};









