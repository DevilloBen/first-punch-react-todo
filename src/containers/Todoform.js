import React, { useState } from "react";
import { TodoItem } from '../components'



const Todoform = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState("");

  const handleClick = () => {
    const nextTodoList = todoList;
    nextTodoList.push({
        userId: 1,
        id: 1,
        title: inputState,
        completed: false
      });
    setTodoList([...nextTodoList]);
    setInputState("");
  };

  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  const handleDelete = (index) => {
    const deleteTodoList = todoList;
    deleteTodoList.splice(index, 1);
    setTodoList([...deleteTodoList]);
  };

  return (
    <div className="card">
      <div className="form-container">
        <input
          className="input"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          onKeyPress={(e) => handleEnter(e)}
        />
        <button className="btn-add" type="button" onClick={handleClick}>
          add
        </button>
      </div>
      <div className="card-form">
        {todoList.map((todo, index) => {
          return (
              <TodoItem key={index} todo={todo} index={index} handleDelete ={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default Todoform;
