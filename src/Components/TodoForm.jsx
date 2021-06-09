import React, { useState } from "react";
import AddBoxIcon from '@material-ui/icons/AddBox';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Add todo..."
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary btn-sm m-2">
           <AddBoxIcon/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
