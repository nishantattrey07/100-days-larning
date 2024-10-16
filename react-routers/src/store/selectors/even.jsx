import { selector } from "recoil";
import { counter } from "../atoms/count";

export const even = selector({
    key: "even",
    get: ({ get }) => { 
        const count = get(counter);
        if (count == 0) return false;
        return count % 2 == 0 ? true : false;
    },
})