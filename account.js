const generateNewId = () => Math.floor(Math.random() * 100);
class Account {
  constructor(name, balance) {
    this.id = generateNewId();
    this._name = name;
    this._balance = balance;
  }

  static identifyAccounts(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (typeof value !== "number") {
      throw new Error("Enter the number");
    }
    return (this._balance = value);
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value === "number") {
      throw new Error("Enter Cart name");
    }
  }
  debit(amount) {
    this._balance += amount;
    return this._balance;
  }
  credit(amount) {
    this._balance -= amount;
    return this._balance;
  }
  transferTo(anotherAccount, amount) {
    this.credit(amount);
    anotherAccount.debit(amount);
    return this.balance;
  }
}

const acc1 = new Account("Visa", 2000);
const acc2 = new Account("Visa", 5000);
console.log(acc1);
console.log(acc2);
// console.log(acc1.debit(1000));
// console.log(acc1.credit(2000));
console.log(acc1.transferTo(acc2, 2000));
console.log(acc2.balance);
const acc3 = new Account("master", 5000);
console.log(acc3);
console.log(Account.identifyAccounts(acc1, acc2));
