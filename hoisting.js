//1.
for (let i = 0; i < 5; i++) {
    console.log(i);
};

//console.log('hoisting : ' + i);
//2.

console.log(x); // Outputs: undefined
var x = 10;
console.log(x); // Outputs: 10
//3.

foo(); // Outputs: "Hello, World!"

function foo() {
    console.log("Hello, World!");
}

//4.
console.log(y); // Outputs: undefined
var y = 20;

bar(); // Outputs: "Hello, Universe!"
function bar() {
    console.log("Hello, Universe!");
}
