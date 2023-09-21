
//example-1
function outerFunction() {
    let outerVariable = "I am from outerFunction";

    function innerFunction() {
        console.log(outerVariable); // innerFunction has access to outerVariable
    }

    return innerFunction;
}

const closure = outerFunction(); // closure now holds a reference to innerFunction
closure(); // This will log "I am from outerFunction" even though we're calling it outside of outerFunction

//example-2
function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(count);
    }

    function decrement() {
        count--;
        console.log(count);
    }

    return {
        increment,
        decrement
    };
}

const counter = createCounter();

counter.increment(); // Output: 1
counter.increment(); // Output: 2
counter.decrement(); // Output: 1
