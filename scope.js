
//we cannot declare any variable outside scope{}
function addition(a, b) {
    const total = a + b;
    return total;
    if (a > 5) {
        const sum = 25 + a + b;
    }
    else {
        const sum2 = 20 + a + b;
    }
}
const result = addition(10, 5);
console.log(result);


///////////////////////////////////////////////////////////
// Global scope
var globalVariable = "I'm a global variable";

function globalFunction() {
    // Function scope
    var functionVariable = "I'm a function-scoped variable";
    console.log(globalVariable); // Accessible from within the function
    console.log(functionVariable); // Accessible within the function
}

globalFunction();

console.log(globalVariable); // Accessible outside the function
// console.log(functionVariable); // This will result in an error since it's not accessible here

if (true) {
    // Block scope (introduced in ES6 with 'let' and 'const')
    let blockVariable = "I'm a block-scoped variable";
    const constantVariable = "I'm a block-scoped constant";

    console.log(blockVariable); // Accessible within the block
    console.log(constantVariable); // Accessible within the block
}

// console.log(blockVariable); // This will result in an error since it's not accessible here
// console.log(constantVariable); // This will result in an error since it's not accessible here

