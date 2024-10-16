/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Suspense, lazy, useContext, useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
// import { countContext } from "./context";
// import Dashboard from "./components/Dashboard";
const countContext = createContext(0);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <countContext.Provider value={count}>
        <Count setCount={setCount} />
      </countContext.Provider>
    </>
  );
}

function CountRender() {
  const count = useContext(countContext);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
function Count({ setCount }) {
  return (
    <div>
      <CountRender />
      <Button setCount={setCount} />
    </div>
  );
}

function Button({ setCount }) {
  const count = useContext(countContext);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
