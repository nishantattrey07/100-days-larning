function maxNum(arr: number[]) { 
    return Math.max(...arr);
}

const arr = [1, 2, 3, 4, 5];
console.log(maxNum(arr));


interface UserType {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal1(arr: UserType[]) { 
    return arr.filter(user => user.age >= 18);
}

const users = [
    {
        firstName: "Nishant",
        lastName: "Kumar",
        age: 18
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 17
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 20
    }
]

console.log(isLegal1(users));
