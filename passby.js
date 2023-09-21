
let num1 = 7;
let num2 = 5;
function multiply(a, b) {
    a = 10;
    const result = a * b;
    return result;
};
console.log(num1, num2);
multiply(num1, num2);
console.log(num1, num2);


let student1 = { name: "Sajal Hossain", partner: "Akashi" };
let student2 = { name: "Akashi Akhther", partner: "Sajal" };

function makeMovie(couple1, couple2) {
    couple1.name = 'Suzan Ali';
    couple2.partner = 'Suzan';
}
console.log(student1, student2);

makeMovie(student1, student2)
console.log(student1, student2);