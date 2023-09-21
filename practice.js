//1.
console.log([] == true); // This will output false
var myArray = [];

if (myArray.length === 0) {
    console.log('The array is empty');
} else {
    console.log('The array is not empty');
}

//2.
const b = true === 'true';
//console.log(b);
//3.
const isNotANumber = (value) => {
    return isNaN(value);
};

// Example usage:
//console.log(isNotANumber(42));      // false (It's a number)
//console.log(isNotANumber("Hello")); // true  (It's not a number)

//4.

const isANumber = (value) => {
    if (typeof value === 'number') {
        return true
    }
    else {
        return false
    }
};

// Example usage:
console.log(isANumber(42));      // true (It's a number)
console.log(isANumber("Hello")); // false (It's not a number)

//5.

/* change the value stored in the storeFalsyValue  variable to falsy value, such that the code in the else statement executes */
let storedFalsyValue = true;
if (!storedFalsyValue) {
    console.log('Nothing to show')
}
else {
    console.log('You are amazing!')
}


//write a arrow function that will take 3 parameter (first two parameter will bw number and third parameter will be a string) that will perform arithmetic operation depending on the third parameter and will print the result. for example
//1. print result of num1+num2 if operation is "add"

const performArithmeticOperation = (num1, num2, operation) => {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero");
                return;
            }
            break;
        default:
            console.log("Error: Invalid operation");
            return;
    }

    console.log(`Result of ${num1} ${operation} ${num2} is: ${result}`);
};

// Example usage:
performArithmeticOperation(5, 3, 'add'); // Result of 5 add 3 is: 8
performArithmeticOperation(10, 4, 'subtract'); // Result of 10 subtract 4 is: 6
performArithmeticOperation(7, 2, 'multiply'); // Result of 7 multiply 2 is: 14
performArithmeticOperation(8, 2, 'divide'); // Error: Division by zero
performArithmeticOperation(5, 3, 'power'); // Error: Invalid operation
