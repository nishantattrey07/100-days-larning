import { selector } from "recoil";
import { Todos } from "../atoms/todo";
import { Filter } from "../atoms/inputBox";

export const FilterTodo = selector({
    key: "FilterTodo",
    get: ({ get }) => { 
        const todos = get(Todos);
        const filter = get(Filter);

        return todos.filter((todo)=> todo.title.includes(filter) || todo.description.includes(filter));
    }
}) 