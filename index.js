const arrOfPeople = [
  { name: "Stefan", age: 62, kudos: 900 },
  { name: "Raeven", age: 12, kudos: 9 },
  { name: "Leon", age: 42, kudos: 1200 },
  { name: "Max", age: 28, kudos: 100 },
];

const filteredPeopleByKudos = arrOfPeople.filter(personObj => personObj.kudos > 10);
console.log(filteredPeopleByKudos);

const findPerson = arrOfPeople.find(person => person.name === "Max");
console.log(findPerson);

const mappedPersonByName = arrOfPeople.map(person => person.name);

console.log(mappedPersonByName.sort());
console.log(mappedPersonByName.includes("Stefan"));

console.log(mappedPersonByName.findIndex(person => person === "Stefano"));

// const reduced = arrOfPeople
//   .map(person => person.age)
//   .reduce((acc, curr) => {
//     if (curr < 30) {
//       return acc.concat(curr);
//     } else {
//         return acc
//     }
//   }, []);
const reduced = arrOfPeople.map(person => person.age).reduce((acc, curr) => (curr < 30 ? acc.concat(curr) : acc), []);

console.log(reduced);

// ***************************

// TERNARY OPERATOR

const studName = "John";

// let isAdmitted = false

// if (studName === "John") {
//     isAdmitted = true
// }

const isAdmitted = studName === "John" ? true : false;

// ********************************

const multiply = (n1 = 1, n2 = 1) => n1 * n2;

console.log(multiply(2, 2));
console.log(multiply(2, 3));
console.log(multiply(2));

const search = (query = "forest") => {
  console.log("http://pexels.com/api/" + query);
};

search("trees");
search();

// **********************************

// REST PARAMETERS

const withRestParams = (param1, param2, ...rest) => {
  console.log(rest);
  return param1 + param2;
};

console.log(withRestParams(1, 2, 6, 9, 10));

// *************************************

// DESTRUCTURING

const myObj = {
  name: "Ahmed",
  role: "student",
  course: {
    module: "M3",
    track: "Fullstack",
  },
};

// const track = myObj.course.track
// const module = myObj.course.module

const {
  name,
  role,
  course: { module, track },
} = myObj;

// name
// role
// module
// track

// *************************************
// DESTRUCTURING FUNCTIONS PARAMETERS

const personObj = {
  name: "Stefano",
  lastName: "Miceli",
  area: {
    continent: "EU",
    country: "Italy",
    region: { province: "Udine" },
  },
};

const readPersonDetails = ({
  name,
  lastName,
  area: {
    continent,
    region: { province },
  },
}) => {
  console.log(name);
  console.log(lastName);
  console.log(continent);
  console.log(province);
};

// console.log(personObj.area.region.province)

// readPersonDetails(personObj.name, personObj.lastName, personObj.area.region)
readPersonDetails(personObj);

// CREATING AN OBJECT WITH DESTRUCTURED VARIABLES INSIDE
const car = "Ford";
const parkinglot = "G-20";

// const randomObj = { car: car, parkinglot: parkinglot }
const randomObj = { car, parkinglot };
// randomObj;

// ARRAY DESTRUCTURING

const randomArr = ["a", "b", "c", "d", "e"];

// const third = randomArr[2]

// const [first, second, third, fourth, fifth] = randomArr;

// first
// second
// third
// fourth
// fifth

// const [, , third, , ] = randomArr;
// third
const [, x, ...rest] = randomArr;
// x
// rest

// SPREAD OPERATOR FOR OBJECTS

const student = {
  name: "Raeven",
  planet: "Earth",
  shirtColor: "white",
};

const student2 = {
  name: "Leon",
  planet: "Mars",
  street: "red st. 2",
};

const student3 = {
  name: "Sarah",
  location: "office",
  shirtColor: "blue",
};

const student4 = Object.assign({}, student, student2);

const student5 = { ...student, shirtColor: "red", ...student3 };

// student5

// SPREAD OPERATOR FOR ARRAYS

const arr1 = [1, 2, 3];
const arr2 = [5, 6, 7];

const arr3 = [...arr1, 4, 0, ...arr2];
// arr3

const word = "We are at Strive School!";

console.log([...word].reverse().join(""));
