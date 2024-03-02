// TypeError: filter is not a function in JavaScript

// EXAMPLE 1 - Make sure to only call Array.filter() on arrays

const arr = [4, 6, 11];

const result = arr.filter(element => element % 2 === 0);

console.log(result); // 👉️ [4, 6]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is an array before calling filter()

// const arr = null;

// const result = Array.isArray(arr)
//   ? arr.filter(num => num % 2 === 0)
//   : [];

// console.log(result); // 👉️ []

// ------------------------------------------------------------------

// // EXAMPLE 3 - Use `Object.values()` to get an array of the object's values

// const obj = {a: 2, b: 4, c: 13};

// const values = Object.values(obj);
// console.log(values); // 👉️ [2, 4, 13]

// const result = values.filter(num => num % 2 === 0);
// console.log(result); // 👉️ [2, 4]

// ------------------------------------------------------------------

// // TypeError: object.filter is not a function in JavaScript

// // EXAMPLE 4 - Use Object.values() with Array.filter()

// const obj = {
//   user1: {id: 1, name: 'Alice'},
//   user2: {id: 2, name: 'Bob'},
//   user3: {id: 3, name: 'Charlie'},
// };

// // 👇️ [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}, ...]
// console.log(Object.values(obj));

// const result = Object.values(obj).filter(value => {
//   console.log(value);
//   return value.id === 2;
// });

// // 👇️ [{id: 2, name: 'Bob'}]
// console.log(result);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Finding a single object that matches a condition with `Array.find()`

// const obj = {
//   user1: {id: 1, name: 'Alice'},
//   user2: {id: 2, name: 'Bob'},
//   user3: {id: 3, name: 'Charlie'},
// };

// // 👇️ if you only need the object that matches the condition
// const found = Object.values(obj).find(value => {
//   return value.id === 2;
// });

// // 👇️ {id: 2, name: 'Bob'}
// console.log(found);
