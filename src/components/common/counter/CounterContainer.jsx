import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, agregarAlCarrito }) => {
  const [counter, setCounter] = useState(1);

  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      stock={stock}
      agregarAlCarrito={agregarAlCarrito}
    />
  );
};

export default CounterContainer;
