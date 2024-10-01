var module1 = require('./module1.js');
var arith = require('./calc');

// console.log(module1);
// console.log(module);
// console.log(module1.greet());
// console.log(module1.name);
// console.log(module1.age);
// console.log(module1.course);

console.log(arith);
console.log(arith.add(4,5));
console.log(arith.subtract(4,5));
console.log(arith.multiply(4,5));
console.log(arith.divide(4,5));



console.log(__dirname);
console.log(__filename);

// console.log(console);

// //setTimeout
// setTimeout(()=> {
//     console.log('Hello World');
// },3000);

// //setInterval
// setInterval(()=>{
//     console.log('Hello World');
// },3000);

// console.log(global);