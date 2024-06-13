// Object that holds the meal, price, and their respective getter and setters 
const menu = {
  _meal : '',
  _price : 0,
// Setter methods for type checking of the values 
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  },
// Getter methods that return the values 
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for ${this._price}!`;
    } else {
      return "Meal or price was not set correctly!"
    }
  }
};

menu.meal = 'Chicken';
menu.price = 5;

console.log(menu.todaysSpecial);


