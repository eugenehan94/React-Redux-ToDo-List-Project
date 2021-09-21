import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoAction } from "./redux/actions/index";
function App() {
  const text = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  const { addTodo, deleteTodo, completedTodo } = bindActionCreators(
    todoAction,
    dispatch
  );
  const [input, setInput] = useState("");

  const handleSubmit = (id) => {
    if (input === null || input === "") {
      return;
    } else {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <div>
      <h1>To do list</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={() => {
          handleSubmit(input);
        }}
      >
        Add to list
      </button>
      {console.log(text)}
      {text.map((text, index) => {
        return (
          <div key={index} className="todo-choice-wrapper">
            <h3
              onClick={() => completedTodo(text.id)}
              className={`${
                text.complete === true ? "todo-choice-active" : ""
              }`}
            >
              {text.text}
            </h3>

            {text.text === null || text.text === "" ? null : (
              <button onClick={(e) => deleteTodo(text.id)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
