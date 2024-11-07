"use strict";
function getGeneric(inp) {
    return inp;
}
let str = getGeneric("Hello");
let num = getGeneric(10);
let bool = getGeneric(true);
let arr3 = getGeneric([1, 2, 3]);
let obj = getGeneric({ name: "Nishant" });
let arr2 = getGeneric(["a", "b", "c"]);
let obj2 = getGeneric({ name: "Nishant" });
console.log(str);
console.log(num);
console.log(bool);
console.log(arr3);
console.log(obj);
console.log(arr2);
console.log(obj2);
