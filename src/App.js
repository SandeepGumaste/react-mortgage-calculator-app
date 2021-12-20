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
  const intlNum = new Intl.NumberFormat("en-US");

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
    <div className="p-5 md:p-10 flex justify-center items-center">
      <div className="flex flex-col items-center ring-8 ring-blue-500 rounded-lg w-full md:w-3/4">
        <h1 className="text-2xl font-bold md:text-4xl md:pb-10 pt-10 pb-5">
          Mortgage Calculator
        </h1>
        <div>
          <div className="sliders flex flex-col gap-5 lg:grid lg:grid-cols-3 md:gap-20 p-5">
            <Slider
              name="Purchase Price"
              minval={0}
              maxval={10000000}
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
            <div className="flex flex-col md:flex-row col-span-2 text-2xl">
              <div>
                <h2>Loan amount</h2>
                {intlNum.format(loanAmt)} USD
              </div>
              <div className="pt-5 md:pt-0 md:pl-10">
                <h2>Estimated pr. month</h2>
                {intlNum.format(estimate)} USD
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-5">
            <label
              for="my-modal-2"
              class="btn bg-primary border-0 modal-button mt-5"
            >
              Get mortgage quote
            </label>
            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box">
                <div className=" text-left">
                  <h1 className=" text-4xl pb-5">Mortgage Quote</h1>
                  <p className="pb-5 text-lg">
                    Purchase price: {intlNum.format(price)} USD
                  </p>
                  <p className="pb-5 text-lg">
                    Downpayment: {intlNum.format(downPayment)} USD
                  </p>
                  <p className="pb-5 text-lg">
                    Loan amount : {intlNum.format(loanAmt)} USD
                  </p>
                  <p className="pb-5 text-lg">
                    Estimated pr. month: {intlNum.format(estimate)} USD
                  </p>
                  <p className="text-lg">
                    Total interest amount :
                    {intlNum.format(estimate * 12 * repayment - downPayment)}
                    USD
                  </p>
                </div>
                <div class="modal-action flex justify-center">
                  <label for="my-modal-2" class="btn w-2/4">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
