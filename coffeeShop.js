class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  addOrder(item) {
    let isItem = false;
    this.menu.forEach((element) => {
      let type = element.type;
      let price = element.price;
      if (item === element.item) {
        isItem = true;

        this.orders.push({ item, type, price });
      }
    });
    if (isItem === false) {
      return "This item is currently unavailable!";
    }
    return "Order added";
  }
  fulfillOrder() {
    if (this.orders.length === 0) {
      return "All orders have been fulfilled!";
    } else {
      let x = this.orders[0];
      this.orders.shift();
      return `${x} is ready`;
    }
  }
  dueAmount() {
    return this.orders.reduce((acc, el) => {
      return acc + el.price;
    }, 0);
  }
  cheapestItem() {
    let min = this.menu[0].price;
    this.menu.forEach((element) => {
      if (element.price < min) {
        min = element.price;
      }
    });
    return min;
  }
  drinkOnly() {
    let drink = [];
    this.menu.forEach((element) => {
      if (element.type === "drink") {
        drink.push(element.item);
      }
    });
    return drink;
  }
  foodOnly() {
    let food = [];
    this.menu.forEach((element) => {
      if (element.type === "food") {
        food.push(element.item);
      }
    });
    return food;
  }
}
const coffee1 = new CoffeeShop(
  "Coffee house",
  [
    { item: "tuna", type: "food", price: 800 },
    { item: "hamburger", type: "food", price: 1000 },
    { item: "coca cola", type: "drink", price: 400 },
    { item: "coffee", type: "drink", price: 500 },
  ],
  []
);

console.log(coffee1.addOrder("tuna"));
console.log(coffee1.addOrder("hamburger"));
console.log(coffee1.addOrder("coffee"));
console.log(coffee1.cheapestItem());
console.log(coffee1.drinkOnly());
console.log(coffee1.foodOnly());

console.log(coffee1.menu);
