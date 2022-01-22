import Counter from "./components/Counter";
import DisplayNumber from "./components/DisplayNumber";
import Form from "./components/Form";

const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div>
      {/* <h1>Form:</h1> */}
      <hr />
      {/* <Form/> */}

      <Counter />
      <hr />
      {arr.map((num) => (
        <DisplayNumber key={num} number={num} />
      ))}
    </div>
  );
};

export default App;
