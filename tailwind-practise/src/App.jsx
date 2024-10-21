import { RevenueCard } from "./components/RevenueCard";
import "./App.css";
import { Payout } from "./components/Payout";
import { AppBar } from "./components/AppBar";
import { OverViewBar } from "./components/OverViewBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-row justify-between">
      <div className=" ">
        <SideBar />
      </div>
      <div>
        <header>
          <AppBar title={"Payouts"} />
        </header>
      </div>
      <div>
        <section className="flex flex-col gap-6">
          <OverViewBar title={"OverView"} />
          <div className=" flex gap-5 flex-wrap">
            <Payout
              title={"Next Payout"}
              amount={"2312.32"}
              orders={"23"}
              paymentTiming={"Today, 4:00PM"}
            />
            <RevenueCard
              title="Amount Pending"
              revenue="92,312.20"
              orderCount={13}
            />
            <RevenueCard title="Amount Processed" revenue="1,92,312.20" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
