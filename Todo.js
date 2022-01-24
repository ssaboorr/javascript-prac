import React from "react";

const Todo = () => {
  const [todos, setTodos] = React.useState(["Sample task"]);

  const addTask = (e) => {
    e.preventDefault();
    setTodos([...todos, e.target.elements.addTask.value]);
    e.target.elements.addTask.value = "";
  };

  const deleteTask = (task) => setTodos(todos.filter((todo) => todo !== task));

  return (
    <div>
      <h2>My Todos</h2>
      <ul style={{ paddingLeft: 0 }}>
        {todos.map((task) => (
          <li key={task} style={{ listStyleType: "none" }}>
            <input type="checkbox" onChange={() => deleteTask(task)} /> {task}
          </li>
        ))}
      </ul>
      <hr />
      <form onSubmit={addTask}>
        <input type="text" placeholder="Add New Task" name="addTask" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );

  // const [count, setCount] = React.useState(100); // hook to maintain and manage component state
  // const increment = () => setCount(count + 1); // modify state
  // const decrement = () => setCount(count - 1); // modify state
  // return (
  //   <>
  //     <p className='para'>Count: {count}</p>
  //     <button onClick={increment}>Increase Counter</button>
  //     <button onClick={decrement}>Decrease Counter</button>
  //   </>
  // );
};

export default Todo;
