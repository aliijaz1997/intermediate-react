import { useReducer } from "react";
import "./App.css";

const initialState = { count: 0 };

export function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };

    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h3 className="text-warning">
        Current value of the counter is ={" "}
        <span className="text-dark">{state.count}</span>
      </h3>
      <button
        className="btn btn-primary m-1"
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        className="btn btn-primary m-1"
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <br />
      <button
        className="btn btn-danger m-1"
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset Counter
      </button>
    </div>
  );
}

export default App;
