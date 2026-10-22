/*
console.log("Привет, мир!");
console.log("Я учу JavaScript");
*/

// let name = prompt("Как тебя зовут?");
// let age = prompt("Сколько тебе лет?");

// console.log("Привет, " + name + "!");
// console.log("Тебе " + age + " лет.");

// let age = Number(prompt("Сколько тебе лет?"));

// if (age >= 18) {
//   console.log("Ты совершеннолетний");
// } else {
//   console.log("Ты ещё несовершеннолетний");
// }

// let n = Number(prompt("Введи число"));

// for (let i = 1; i <= n; i++) {
//   console.log(i);
// }

function isEven(x) {
  return x % 2 === 0;
}

let n = Number(prompt("Введи число"));

for (let i = 1; i <= n; i++) {
  if (isEven(i)) {
    console.log(i + " — чётное");
  }
}
