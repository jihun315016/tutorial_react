import { useState } from "react"
import Decimal from "decimal.js";

interface CalculatorState {
  currentNumber:string;
  previousNumber: string;   // 이전에 입력한 숫자
  operation: string | null; // 연산기호 또는 null
  isNewNumber: boolean;     // 새로운 숫자 입력 여부
}

export default function App() {
  const [state, setState] = useState<CalculatorState>({
    currentNumber: '0',   // 현재 계산기 화면에 표시되는 숫자
    previousNumber: '',   // 연산 기호 버튼 클릭 전 입력한 숫자
    operation: null,      // 연산 기호
    isNewNumber: true     // 새로운 숫자를 입력할지 여부
  });

  const handleNumberClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const value = event.currentTarget.value;
    if(state.isNewNumber) {
      setState({
        ...state,
        currentNumber: value,
        isNewNumber: false,
      });
    } else {
      setState({
        ...state,
        currentNumber: state.currentNumber + value
      });
    }
  };

  const handleOperatorClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    if (state.currentNumber === '0') return;

    const operator = event.currentTarget.value;
    const current = parseFloat(state.currentNumber || '0');

    // 이전에 입력한 숫자가 있고, 이전에 연산 기호를 클릭했다면
    if (state.previousNumber !== '' && state.operation) {
      const prev = parseFloat(state.previousNumber);
      let result = 0;

      switch (state.operation) {
        case '+':
          result = new Decimal(prev).plus(current).toNumber();
          break;
        case '-':
          result = new Decimal(prev).minus(current).toNumber();
          break;
        case '*':
          result = new Decimal(prev).times(current).toNumber();
          break;
        case '/':
          result = new Decimal(prev).dividedBy(current).toNumber();
          break;
      }

      if (operator === '=') {
        // = 클릭 : 연산 종료
        setState({
          currentNumber: result.toString(),
          previousNumber: '',
          operation: null,
          isNewNumber: true,
        });
      } else {
        // 다른 연산 기호 클릭 : 연산 유지
        setState({
          currentNumber: '',
          previousNumber: result.toString(),
          operation: operator,
          isNewNumber: true,
        });
      }
    } else if (state.currentNumber !== '' && operator === '=') {
      setState({
        ...state,
        isNewNumber: true
      });
    } else {
      setState({
        currentNumber: '',
        previousNumber: current.toString(),
        operation: operator,
        isNewNumber: true
      });
    }
  };

  const handleClear = () => {
    setState({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true
    });
  };

  const handleDot = () => {
    if (!state.currentNumber.includes('.')) {
      setState({
        ...state,
        currentNumber: state.currentNumber + '.',
        isNewNumber: false
      });
    }
  };

  return(
    <>
      <article className="calculator">
      <form name="forms">
        <input type="text" name="output" value={state.currentNumber} readOnly />
        <input type="button" className="clear" value="C" onClick={handleClear} />
        <input type="button" className="operator" value="/" onClick={handleOperatorClick} />
        <input type="button" value="1" onClick={handleNumberClick} />
        <input type="button" value="2" onClick={handleNumberClick} />
        <input type="button" value="3" onClick={handleNumberClick} />
        <input type="button" className="operator" value="*" onClick={handleOperatorClick} />
        <input type="button" value="4" onClick={handleNumberClick} />
        <input type="button" value="5" onClick={handleNumberClick} />
        <input type="button" value="6" onClick={handleNumberClick} />
        <input type="button" className="operator" value="+" onClick={handleOperatorClick} />
        <input type="button" value="7" onClick={handleNumberClick} />
        <input type="button" value="8" onClick={handleNumberClick} />
        <input type="button" value="9" onClick={handleNumberClick} />
        <input type="button" className="operator" value="-" onClick={handleOperatorClick} />
        <input type="button" className="dot" value="." onClick={handleDot} />
        <input type="button" value="0" onClick={handleNumberClick} />
        <input type="button" className="operator result" value="=" onClick={handleOperatorClick} />
      </form>
    </article>
    </>
  )
}