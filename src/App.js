import React from "react";
import "./App.css";
function App() {
  const [optionValue, setOptionValue] = React.useState("isPrime");
  const [result, setResult] = React.useState("false");
  const [number, setNum] = React.useState(0);
  React.useEffect(() => {
    const isFibanacci = (num) => {
      if (isSquare(5 * (num * num) - 4) || isSquare(5 * (num * num) + 4)) {
        return true;
      } else {
        return false;
      }
    };

    if (optionValue === "isPrime") {
      isPrime(number) ? setResult("true") : setResult("false");
    } else {
      isFibanacci(number) ? setResult("true") : setResult("false");
    }
  }, [number, optionValue]);

  var isSquare = function (num) {
    return num > 0 && Math.sqrt(num) % 1 === 0;
  };

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  return (
    <div className="row-wrap">
      <div className="column1">
        <input
          type="number"
          value={number}
          onChange={(e) => {
            var target = e.target.value;
            target < 0 ? setNum(1) : setNum(Math.round(target));
          }}
        />
      </div>
      <div className="column2">
        <select
          value={optionValue}
          onChange={(e) => {
            setOptionValue(e.target.value);
          }}
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibonacci">isFibonacci</option>
        </select>
      </div>
      <div className="column3">{result}</div>
    </div>
  );
}

export default App;
