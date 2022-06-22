import "./ExStyle.css";
import { useSelector, useDispatch } from "react-redux";
function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2></Left2>
    </div>
  );
}
function Left2(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left3></Left3>
    </div>
  );
}
function Left3(props) {
  const dispatch = useDispatch();
  const up = (step) => {
    return { type: "UP", step: step };
  };
  return (
    <div>
      <h1>Left3</h1>
      <button
        onClick={() => {
          dispatch(up(1));
        }}
      >
        +
      </button>
    </div>
  );
}
function Right1() {
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  );
}
function Right2() {
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  );
}
function Right3() {
  const count = useSelector((state) => state.value);
  return (
    <div>
      <h1>Right3</h1>
      {count}
    </div>
  );
}
export default function App() {
  return (
    <div id="app">
      <h1>Root</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Left1></Left1>
        <Right1></Right1>
      </div>
    </div>
  );
}