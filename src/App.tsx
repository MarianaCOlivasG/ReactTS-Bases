import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterReducer } from "./counter-reducer/CounterReducer";
// import { CounterReducer } from "./bases/CounterReducer";

function App() {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy initialValue={ 15 } />
      <CounterEffect />
      <CounterHook />
      <CounterReducer />
    </>
  );
}

export default App;
