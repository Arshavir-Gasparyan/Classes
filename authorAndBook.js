class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "number") {
      throw new Error("Enter Author name!");
    } else {
      this._name = value;
    }
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value === "male" || value === "female") {
      return this._gender;
    } else {
      throw new Error("Enter male or female");
    }
  }
  toString() {
    return `${this._name}, ${this.email}, ${this._gender}`;
  }
}
const author1 = new Author("Aram", "aram@mail.ru", "male");
console.log(author1.toString());
class Books {
  constructor(title, price, quantity, author) {
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  get title() {
    return this._title;
  }
  get price() {
    return this._price;
  }
  set price(val) {
    if (typeof val !== "number") {
      throw new Error("Enter Number");
    }
    return (this._price = val);
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(val) {
    if (typeof val !== "number") {
      throw new Error("Enter Number");
    }
    return (this.quantity = val);
  }
  get author() {
    return this.author;
  }
  getProfit() {
    return `${this._price * this._quantity}`;
  }
  babyToString() {
    return `${this._author}, ${this.price}, ${this.quantity}, ${this.title} `;
  }
}
const book1 = new Books("book", 2500, 10, "Ann");
console.log(book1.babyToString());
