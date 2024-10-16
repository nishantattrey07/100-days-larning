import { atom } from "recoil";

export const Todos = atom({
    key: "Todos",
    default: [{
        id:"",
        title: "",
        description:""
    }]
})