import { useState } from "react";
import "./style.css";

function App() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(e) {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }
  const clear = () => {
    setNum(0);
  };
  const calculate = () => {
    if (operator === "/") {
      setNum(oldNum / num);
    } else if (operator === "*") {
      setNum(oldNum * num);
    } else if (operator === "+") {
      setNum(parseInt(oldNum) + parseInt(num));
    } else if (operator === "-") {
      setNum(oldNum - num);
    }
  };
  const operatorhandle = (e) => {
    setOperator(e.target.value);
    setOldNum(num);
    setNum(0);
  };
  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text" value={num} />
        </form>
        <div className="keypad">
          <button onClick={clear} id="clear">
            Clear
          </button>
          <button id="backspace">C</button>
          <button value="/" onClick={operatorhandle} id="highlight">
            &divide;
          </button>
          <button value="7" onClick={inputNum}>
            7
          </button>
          <button value="8" onClick={inputNum}>
            8
          </button>
          <button value="9" onClick={inputNum}>
            9
          </button>
          <button value="*" onClick={operatorhandle} id="highlight">
            &times;
          </button>
          <button value="4" onClick={inputNum}>
            4
          </button>
          <button value="5" onClick={inputNum}>
            5
          </button>
          <button value="6" onClick={inputNum}>
            6
          </button>
          <button value="-" onClick={operatorhandle} id="highlight">
            &ndash;
          </button>
          <button value="1" onClick={inputNum}>
            1
          </button>
          <button value="2" onClick={inputNum}>
            2
          </button>
          <button value="3" onClick={inputNum}>
            3
          </button>
          <button value="+" onClick={operatorhandle} id="highlight">
            +
          </button>
          <button value="0" onClick={inputNum}>
            0
          </button>
          <button value="." onClick={inputNum}>
            .
          </button>
          <button id="result" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
