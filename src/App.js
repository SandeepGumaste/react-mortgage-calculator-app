import "./App.css";
import React, { useState, useEffect } from "react";
import Slider from "./components/Slider";

function App() {
  const [price, setPrice] = useState(100000);
  const [downPayment, setDownPayment] = useState(50000);
  const [repayment, setRepayment] = useState(1);
  const [interest, setInterest] = useState(1);
  const [loanAmt, setLoanAmt] = useState(0);
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    setLoanAmt(price - downPayment);
  }, [price, downPayment]);

  useEffect(() => {
    // Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)]
    const calcEst = () => {
      const n = 12 * repayment;
      const intrst = interest / 100 / 12;
      const pwr = Math.pow(1 + intrst, n);
      const est = loanAmt * ((intrst * pwr) / (pwr - 1));
      setEstimate(Math.round(est));
    };
    calcEst();
  });

  return (
    <div className="h-screen p-10">
      <div className="flex flex-col items-center ring-8 ring-blue-500 rounded-lg">
        <h1 className="text-2xl pb-3 pt-3">Mortgage Calculator</h1>
        <div>
          <div className="sliders grid p-5">
            <Slider
              name="Purchase Price"
              minval={0}
              maxval={100000000}
              func={price}
              setfunc={setPrice}
              type="currency"
            />
            <Slider
              name="Down payment"
              minval={0}
              maxval={price}
              func={downPayment}
              setfunc={setDownPayment}
              type="currency"
            />
            <Slider
              name="Repayment time"
              minval={1}
              maxval={30}
              func={repayment}
              setfunc={setRepayment}
              type="time"
            />
            <Slider
              name="Interest rate"
              minval={1}
              maxval={100}
              func={interest}
              setfunc={setInterest}
              type="rate"
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
          <div>
            <button className="btn ">Get a mortgage quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
