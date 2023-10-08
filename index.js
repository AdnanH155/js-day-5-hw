// 1 - destructure an array
const arr = ["BMW", "Toyota", "Honda"];
const [car1] = arr;
const [car2] = arr;
const [car3] = arr;
console.log(car1);

// 2, 3 - destructure an object
const newPerson = {
  name: "Adnan",
  age: 24,
  location: {
    postCode: "AB1 2AB",
    locationName: { long: "London", short: "LDN", newCity: "Bristol" },
  },
};
const {
  long: longLocation,
  short: shortLocation,
  newCity = "City not declared",
} = newPerson.location.locationName;
console.log(longLocation, shortLocation);
console.log(newCity);

// 4 - Change the name of one of the item you pull out of the object
console.log(newCity);

// 5 - flat array
const arr1 = [1, 2, 3, [4, 5]];
console.log(arr1.flat());

// 6 - Use Array.from
const name = "Adnan";
console.log(Array.from(name));

// 7 - Use Array.isArray
const myName = "Adnan";
const myAge = 24;
const array = Array.from(myAge);
console.log(Array.isArray(array));

// 8 - Use the object property shorthand
function newData(name, age, height) {
  return {
    name,
    age,
    height,
  };
}
// 9 - Use the function shorthand in an object
const obj = {
  add(x, y) {
    return x + y;
  },
};

// 10 - Use rest on an array
const footballTeam = ["ramsdale", "saliba", "rice", "odegaard", "partey"];
const [GK, DEF, ...mid] = footballTeam;
console.log(mid);

// 11 - Use Rest on an object - NEED HELP WITH THIS
const setOfNumbers = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a, b, ...restOfNumbers } = setOfNumbers;
console.log(b);

// 12 - Use Spread on an array
const team = ["ramsdale", "saliba", "rice"];
const team2 = ["odegaard", "partey", "saka"];
const newTeam = [...team, ...team2];

console.log(newTeam);

//  13 - Use Spread on an Object - shallow copy
const originalObj = { myFirstName: "Adnan", mySecondName: "Hussain" };
const copyObj = { ...myFirstName };
console.log(copyObj);

// 14 - Use a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    if (age >= 0) {
      this.age = age;
    } else {
      console.error("Negative input declared, re-try");
    }
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  describe() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// // Create a new Person object - FOUND SOME EXTRA THINGS BY GOOGLING BUT I DONT REALLY UNDERSTAND WHAT IT MEANS
// const person1 = new Person("Willam Saliba", 23);

// // Access and modify properties using methods
// person1.describe();
// person1.setName("Bukayo Saka");
// person1.setAge(21);
// person1.describe();
