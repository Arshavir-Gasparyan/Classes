class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (value === "" || typeof value === "number") {
      throw new Error("Enter your firstName");
    } else return (this._firstName = value);
  }
  get lastName() {
    return this.lastName;
  }
  set lastName(value) {
    if (value === "" || typeof value === "number") {
      throw new Error("Enter your lastName");
    } else return (this.lastName = value);
  }
  get gender() {
    return this._gender;
  }
  set gender(value) {
    if (value !== "male" || value !== "female") {
      throw new Error("Enter male or female");
    }
    return (this.gender = value);
  }
  get age() {
    return this._age;
  }
  set age(value) {
    if (typeof value !== "number") {
      throw new Error("Enter your age");
    }
    return (this._age = value);
  }
  toString() {
    return `${this._firstName} ${this._lastName} ${this._gender} ${this._age} years old`;
  }
}
const person1 = new Person("Armen", "Gasparyan", "male", 25);
console.log(person1.toString());

class Student extends Person {
  constructor(firstName, lastName, gender, age, year, fee, program) {
    super(firstName, lastName, gender, age);
    this.year = year;
    this.fee = fee;
    this.program = program;
    this.passedExam = this.program.map((el) => {
      return {
        name: el,
        grade: 0,
      };
    });
  }
  passExam(name, grade) {
    this.passedExam = this.passedExam.map((el) => {
      if (name === el.name) {
        return {
          name,
          grade,
        };
      }
      return el;
    });
    const isAllExamPass = this.passedExam.every((el) => {
      return el.grade >= 50;
    });

    if (isAllExamPass) {
      this.year = this.year + 1;
    }
  }
  studentToString() {
    return `${this.year} ${this.program} `;
  }
}
const student1 = new Student("anna", "amiryan", "female", 25, 2021, 1500, [
  "math",
  "physics",
  "history",
]);

console.log(student1.passExam("math", 52));
console.log(student1.passExam("physics", 51));
console.log(student1.passExam("history", 51));
console.log(student1.studentToString());

// console.log(student1);
