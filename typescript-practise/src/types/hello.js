"use strict";
function greet(firstname) {
    return `Hello, ${firstname}`;
}
console.log(greet("Nishant"));
function passingFunction(fn) {
    setTimeout(fn, 2000);
}
passingFunction(() => console.log("Hello, World!"));
function passingFunction2(fn) {
    let result = 0;
    setTimeout(() => {
        console.log("Waited for 2 seconds");
        result = fn();
        console.log(result);
    }, 2000);
    return result;
}
console.log(passingFunction2(() => { return (10 + 10); }));
