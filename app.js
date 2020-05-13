'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i; //sum=sum+1はsum+=iでもOK
}
console.log(sum);