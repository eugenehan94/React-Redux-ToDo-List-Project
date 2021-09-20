import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { todoAction } from "./redux/actions/index";
function App() {
  const text = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const { addTodo } = bindActionCreators(todoAction, dispatch);
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>Title</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodo(input)}>Add to list</button>
      {text.map((text, index) => {
        return (
          <div key={index}>
            <h2>{text.text}</h2>
            <button onClick={() => console.log(index)}>Delete</button>
            <h3>{index}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
