import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { USERS } from "./store/atoms/AppBar";


function App() {
  return (
    <>
      <RecoilRoot>
        <AppBar />
      </RecoilRoot>
    </>
  );
}

function AppBar() {
  const user = useRecoilValue(USERS);
  

  

  console.log(user);

  return (
    <div className="app-bbar">
      <button>Home</button>
      <button>My Network ({user.network > 99 ? "99+" : user.network})</button>
      <button>Jobs ({user.jobs})</button>
      <button>Messaging ({user.messaging})</button>
      <button>Notifications ({user.notifications>99 ? "99+":user.notifications})</button>
      <button>Me</button>
    </div>
  );
}

export default App;
