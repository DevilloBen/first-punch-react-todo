import React, { useState, useEffect } from "react";
import { getTodoList } from "../utils";
import { TodoItem } from "../components";

const Todoform = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState(String);
  //const [indexState, setIndexState] = useState(Number);
  const [loading, setLoading] = useState(true); // check Loading..
  const [error, setError] = useState(false); //check error

  const handleClick = () => {
    const nextTodoList = todoList;

    nextTodoList.unshift({
      id: 1,
      title: inputState, // add new Data
      completed: false,
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
    console.log(deleteTodoList);
    //await deleteTodoList(deleteTodoListId);

    deleteTodoList.splice(index, 1); //delete array old
    setTodoList([...deleteTodoList]);
  };

  const _getT0doList = async () => {
    try {
      setLoading(true);
      const response = await getTodoList(); // Check Loading
      setLoading(false);

      setTodoList(response.data); // Old data

      //console.log(typeof(response.data.length)); // set Index id
      //console.log("old id => ", indexState);

      setError(false); // Set error false
    } catch (e) {
      setError(true);
      console.log("Error =>", e);
    }
  };

  useEffect(() => {
    _getT0doList();
  }, []);

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
      {loading ? (
        <div className="card-form">
          <h1 className="input-text">Loading.. </h1>
        </div>
      ) : error ? (
        <div className="card-form">
          <h1 className="input-text">Not found</h1>
        </div>
      ) : (
        <div className="card-form">
          {todoList.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todo={todo}
                index={index}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todoform;
