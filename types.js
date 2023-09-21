console.log('hello')

//js dynamic data type
// primitive
const num = 7;
const isTrue = true;
const info = 'Atrai , naogaon';

console.log(typeof num, typeof isTrue, typeof info);

let a = 7;
let b = a;
console.log(a, b)

b = 5;
console.log(a, b)

// non-primitive
const numbers = [2, 4, 6, 8, 10];
const students = { name: 'Sajal Hossain', job: 'Web Developer' };

console.log(typeof numbers, typeof students);

let p = { job: 'islami bank' };
let q = p;

//console.log(p, q);

/* q = { job: 'Felancer' };
console.log(p, q); */

q.job = { job: 'Felancer' };
console.log(p, q);