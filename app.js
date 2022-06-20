"use strict";

// console.log("hello world");

// function sayHelloWorld(text){
//     console.log(text);
// }

// sayHelloWorld("said hello world!!");

// function calc(a, b) {
//   console.log(a + b);
//   console.log(a * b);
//   console.log(a ** b);
//   console.log(a - b);
//   console.log(a / b);
// }
// calc(4, 6);
// calc(4, 9);
// let ism = nameJs("Murodulla", "Yuldashev");
// console.log(ism);

// function nameJs(name, surname) {
//   return(`Myn name is ${name} ${surname}`);
// }

//foo(); funcsiyaning oldidan chaqirib quyilsa funcsiya ishlamaydi

// let foo = function() {
//     console.log("hello world");
// }

// foo();

// console.log(arrowFunc(10, 2));   ARROW FUNCTIONNI HAM UZIDAN OLDIN CHAQIRIB BULMAYDI

let arrowFunc = (a, b) => a + b;

console.log(arrowFunc(10, 2));
