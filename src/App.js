import { useState } from "react";
import "./App.css";

function calculateBill(bill, percent, customPercent) {
  if (bill && percent) {
    return (bill / 100) * percent;
  } else if (bill && customPercent) {
    return (bill / 100) * customPercent;
  }
  return 0;
}

function calculateTotalBill(bill, percent, personAmount, customPercent) {
  if (bill && percent && personAmount) {
    return (bill / 100) * percent * personAmount;
  } else if (bill && customPercent && personAmount) {
    return (bill / 100) * customPercent * personAmount;
  }
  return 0;
}

const tips = [5, 10, 15, 25, 50];

function App() {
  const [bill, setBill] = useState(0);
  const [customPercent, setCustomPercent] = useState(0);

  const [percent, setPercent] = useState(0);

  const [personAmount, setPersonAmount] = useState(0);

  function getPercent(num) {
    setPercent(+num);
  }

  function inputValue(e) {
    setBill(e.target.value);
  }

  function getPersonAmount(e) {
    setPersonAmount(e.target.value);
  }

  function getCustomPercent(e) {
    setCustomPercent(e.target.value);
  }

  function reset() {
    setBill(0);
    setPercent(0);
    setPersonAmount(0);
    setCustomPercent(0);
  }

  return (
    <div className="container">
      <div className="billCard card">
        <h3>bill</h3>
        <input
          onChange={inputValue}
          value={bill || ""}
          className="billInput input"
          type="text"
        />
        <h3>select tip%</h3>
        <div className="tipAmount">
          {tips.map((tip) => {
            return (
              <button
                key={tip}
                className={`btn ${percent === tip ? "active" : ""}`}
                value={tip}
                onClick={(e) => {
                  getPercent(e.target.value);
                }}
              >
                {`${tip}%`}
              </button>
            );
          })}
          <input
            className="tipAmountInput"
            onChange={getCustomPercent}
            value={customPercent || ""}
          />
        </div>
        <h3 className="peopleNumber">number of people</h3>
        <input
          className="peopleInput input"
          value={personAmount || ""}
          onChange={getPersonAmount}
        />
      </div>
      <div className="resultCard card">
        <div className="tipResult">
          <div>
            <p>tip amount</p>
            <p className="person">
              <span>1</span> person
            </p>
          </div>
          <h2>
            <span>$</span>
            {calculateBill(bill, percent, customPercent)}
          </h2>
        </div>
        <div className="tipResult">
          <div>
            <p>Total</p>
            <p className="person">{personAmount} person</p>
          </div>
          <h2>
            <span>$</span>
            {calculateTotalBill(bill, percent, personAmount, customPercent)}
          </h2>
        </div>
        <button className="resetBtn" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
