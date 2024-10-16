/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { counter } from "./store/atoms/count";
import { even } from "./store/selectors/even";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
    console.log("be matlab ka render");
    
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {
    const count = useRecoilValue(counter);
    const even1 = useRecoilValue(even) ? "Is even" : " "
    return (
      <div>
        {count}
        <p>{even1}</p>
      </div>
    );
}

function Buttons() {
  const [count, setCount] = useRecoilState(counter);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
