import { atom, selector } from 'recoil';
import axios from "axios";

export const USERS = atom({
    key: 'USERS',
    default: selector({
        key: 'networkSelector',
        get: async () => { 
            const res = await axios.get("http://localhost:3000/notifications");
            return res.data;
        }
    })
})



