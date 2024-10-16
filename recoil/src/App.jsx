// 2 input boxes (title, description) → atom
// button
// todos => atom
// filter (gym) => atom
// selector (the current set of todos)|

import { RecoilRoot, useRecoilState, useRecoilValue,useSetRecoilState } from "recoil";
import { Filter, TodoTitle, TodoDescription } from "./store/atoms/inputBox";
import { Todos } from "./store/atoms/todo";
import { FilterTodo } from "./store/selectors/filterTodo";

export default function App() {
  return (
    <RecoilRoot>
      <Todos1 />
    </RecoilRoot>
  );
}

function Todos1() {
  return (
    <div>
      <TodoInput />
      <RenderTodo />
    </div>
  );
}

function TodoInput() {
  const [title, setTitle] = useRecoilState(TodoTitle);
  const [description, setDescription] = useRecoilState(TodoDescription);
  const setTodos = useSetRecoilState(Todos);

  const handelPress = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      description: description,
    };

    setTodos((oldTodos) => [...oldTodos, newTodo]);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <button onClick={handelPress}>Submit</button>
    </div>
  );
}

function RenderTodo() {
  const [filter, setFilter] = useRecoilState(Filter);
  const filteredTodos = useRecoilValue(FilterTodo)
  return (
    <div>
      <label htmlFor="inputFilter">Filter</label>
      <input
        type="text"
        id="inputFilter"
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}