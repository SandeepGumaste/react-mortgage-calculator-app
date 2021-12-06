import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";

function App() {
  const [price, setPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [repayment, setRepayment] = useState(1);
  const [interest, setInterest] = useState(1);
  const [loanAmt, setLoanAmt] = useState(0);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    setLoanAmt(price - downPayment);
  }, [price, downPayment]);

  return (
    <div className="h-screen p-10">
      <div className="flex flex-col items-center ring-8 ring-blue-500 rounded-lg">
        <h1 className="text-2xl pb-3 pt-3">Mortgage Calculator</h1>
        <div>
          <div className="sliders grid p-5">
            <Slider
              name="Purchase Price"
              minval={0}
              maxval={100000}
              func={price}
              setfunc={setPrice}
            />
            <Slider
              name="Down payment"
              minval={0}
              maxval={100000}
              func={downPayment}
              setfunc={setDownPayment}
            />
            <Slider
              name="Repayment time"
              minval={1}
              maxval={30}
              func={repayment}
              setfunc={setRepayment}
            />
            <Slider
              name="Interest rate"
              minval={1}
              maxval={30}
              func={interest}
              setfunc={setInterest}
            />
          </div>
          <div>
            <div>
              <h2>Loan amount</h2>
              {loanAmt}
            </div>
            <div>
              <h2>Estimated pr. month</h2>
              {estimate}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
