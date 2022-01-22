import { useState } from "react";
const Counter = () => {
  const [count, setcount] = useState(1);

  const increament = () => setcount(count + 1);
  const decreament = () => setcount(count - 1);
  return (
    <>
      <h1 className="title">Count: {count}</h1>
      <button onClick={increament}>Increase Counter</button>
      <button onClick={decreament}>Decrease Counter</button>
    </>
  );
};

export default Counter;
