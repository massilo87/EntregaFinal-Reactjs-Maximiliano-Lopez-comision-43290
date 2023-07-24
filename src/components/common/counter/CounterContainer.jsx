import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, agregarAlCarrito, cantidadEnCarrito = 1 }) => {
  const [counter, setCounter] = useState(cantidadEnCarrito);

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
