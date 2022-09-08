//Factorial For
var factorialFor = 1;

for (let i = 1; i < 10; i++) {
  factorialFor = factorialFor * i;
  console.log(factorial);
}

console.log(factorial);

//Factorial While
var index = 1;
var factorial = 1;

while (index < 10) {
  factorial = factorial * index;

  index++;
}

//FactorialBreak
let index3 = 1;
let factorial3 = 1;

while (true) {
  factorial3 = factorial3 * index3;

  if (index3 >= 10) {
    break;
  }
  index3++;
}
console.log(factorial3);
