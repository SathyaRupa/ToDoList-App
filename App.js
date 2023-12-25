import "./styles.css";
import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [todoItems, setTodoItems] = useState([
    "Read SpringBoot",
    "Complete assignments",
    "Prepare breakfast",
    "Sleep for 2 hours",
    "Take a shower",
  ]);

  const handleEmptyList = () => {
    setTodoItems([]);
  };

  const ToDoList = ({ items }) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  return (
    <div>
      <Header />
      <main>
        {todoItems.length === 0 ? (
          <p style={{ fontStyle: "italic" }}>Nothing to do buddy. Sleep!</p>
        ) : (
          <ToDoList items={todoItems} />
        )}
        <button onClick={handleEmptyList}>Empty</button>
      </main>
    </div>
  );
}

export default App;
