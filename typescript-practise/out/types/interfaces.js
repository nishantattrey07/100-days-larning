"use strict";
function isLegal(user) {
    return user.age >= 18 ? true : false;
}
const user = {
    age: 18
};
console.log(isLegal(user));
