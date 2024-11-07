function getGeneric<T>(inp: T) { 
    return inp;
}

let str = getGeneric<string>("Hello");
let num = getGeneric<number>(10);
let bool = getGeneric<boolean>(true);
let arr3 = getGeneric<number[]>([1, 2, 3]);
let obj = getGeneric<object>({ name: "Nishant" });
let arr2 = getGeneric<string[]>(["a", "b", "c"]);
let obj2 = getGeneric<{ name: string }>({ name: "Nishant" });
console.log(str);
console.log(num);
console.log(bool);
console.log(arr3);
console.log(obj);
console.log(arr2);
console.log(obj2);
