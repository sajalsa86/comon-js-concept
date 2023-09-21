function sum(a, b, c) {
    //console.log(arguments);
    //console.log(arguments[4]);

    /* for (const argu of arguments) {
        console.log(argu);
    } */
    const argu = [...arguments];
    //console.log(argu)

    const result = a + b + c + argu[3];
    return result;
}

const total = sum(10, 20, 30, 40, 50);
console.log(total);
console.log(sum.length);