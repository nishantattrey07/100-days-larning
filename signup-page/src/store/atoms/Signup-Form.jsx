import { atom } from "recoil";
 
export const UserName = atom({
    key: "UserName",
    default: "",
})

export const UserEmail = atom({
    key: 'UserEmail',
    default: '',
})
  
export const UserPassword = atom({
    key: 'UserPassword',
    default: '',
})

export const UserConfirmPassword = atom({
    key: 'UserConfirmPassword',
    default: '',
})