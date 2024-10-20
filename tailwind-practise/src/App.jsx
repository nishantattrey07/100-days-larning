
import { RevenueCard } from './components/RevenueCard';
import './App.css'
import { Payout } from './components/Payout';
import { AppBar } from './components/AppBar';

function App() {


  return (
    <div>
      <header>
        <AppBar title={"Payouts"}/>
      </header>
      <section className="flex flex-col gap-6">
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
  );
}

export default App


// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4