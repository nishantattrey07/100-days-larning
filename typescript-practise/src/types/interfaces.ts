interface User { 
    age: number;
}

function isLegal(user: User) { 
    return user.age >= 18 ? true : false;
}

const user = {
    age: 18
}

console.log(isLegal(user));