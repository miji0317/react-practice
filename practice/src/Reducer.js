import {useState, useReducer} from 'react';
/*
function App() {
  const [count, setCount] = useState(0);
  return <>
    <button onClick={() => {
      setCount(c => c+1);
    }}>+</button>
    <p>{count}</p>
  </>
}
*/
function App() {
  const countInitValue = 0;
  // counterReducer는 은행
  // oldCount: 현재 값, action: 사용자가 시킨 행동
  const counterReducer = (oldCount, action) => {
    console.log(oldCount, action);
    if (action === 'up') {
      return oldCount + 1;  // return 값이 count
    } else if (action === 'down') {
      return oldCount - 1;
    }
  }

  // count는 state
  // countDispatch는 청구 직원, countDispatch를 부르면 counterReducer 실행
  // countInitValue는 초기값
  const [count, countDispatch] = useReducer(counterReducer, countInitValue);
  return <>
    <button onClick={() => {
      countDispatch('up');
    }}>+</button>
    <button onClick={() => {
      countDispatch('down');
    }}>-</button>
    <p>{count}</p>
  </>
}

export default App;