// Spread Syntax
const thisstate = { liveItems: [1, 2, 3], histories: [6, 7, 8] };
const liveItems = "TEST";
const nextState = { ...thisstate, liveItems };
console.log(nextState);

// Array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
const newArr = [...arr1];

// Object
const obj1 = { name: "Hong", age: 33 };
const obj2 = { occunpation: "Designer", hobby: "Running" };

const combinedObj = { ...obj1, ...obj2 };
const newObj = { ...obj1 };

// Destructuring Assignment

const DesArr = [1, 2, 3];

const [a, b, c] = DesArr;
console.log(a);
console.log(b);
console.log(c);

const DesObj = { nameis: "Hong", age: 33 };

const { nameis, age } = DesObj;

function tryAndGet({ name, age }) {
  console.log(name);
  console.log(age);
}

tryAndGet(DesObj);

// Or

function tryAndGet_two(obj) {
  const { name, age } = obj;
  console.log(name, age);
}
