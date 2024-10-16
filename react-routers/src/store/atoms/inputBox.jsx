import { atom } from "recoil";

export const TodoTitle = atom({
    key: "TodoTitle",
    default: ""
})

export const TodoDescription = atom({
    key: "TodoDescription",
    default: ""
})

export const Filter = atom({
    key: "Filter",
    default: ""
})
