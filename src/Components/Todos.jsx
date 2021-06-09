import React, { useState } from "react";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todos(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return props.todos.map((todo) => (
    <React.Fragment
    key={todo.id}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="list-item "
        
        
      >
        {todo.text}
        <div className="btns">
          <button className="btn btn-light btn-sm m2">
            <EditIcon />
          </button>
          <button className="btn btn-danger btn-sm m2"
          onClick={() => props.onDelete(todo.id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </React.Fragment>
    
  ));
}

export default Todos;
