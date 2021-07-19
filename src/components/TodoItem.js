import React from "react";

const Todolitem = (props) => {
  const { todo, index, handleDelete } = props;

  return (
    <div className="input-text box">
      <div className = "input-title">{todo.title}</div> 
      <button className="btn-del" onClick={() => handleDelete(index)}>
        X
      </button>
    </div>
  );
};

export default Todolitem;
