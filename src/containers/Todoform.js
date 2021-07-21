import React, { useState, useEffect } from "react";
import { getTodoList, deleteTodoList, postTodoList } from "../utils";
import { TodoItem } from "../components";

const Todoform = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputState, setInputState] = useState(String);
  const [loading, setLoading] = useState(true); // check Loading..
  const [error, setError] = useState(false); //check error

  const handleClick = async () => {
    const nextTodo = {
      userId: 1,
      title: inputState, // add new Data  id auto incres
      completed: false,
    };
    try {
      await postTodoList(nextTodo); //เก็บงาน ละแสดงขึ้น P G
      await _getTodoList();
    } catch (e) {
      console.log("error => ", e);
    }
    setInputState(""); // clear input data
  };

  const handleEnter = (info) => (e) => {
    if (e.code === "Enter") {
      console.log(info)
      handleClick();
    }
  };

  const handleDelete = async (index) => {
    const deleteId = todoList;
    //console.log(typeof deleteId);  //object
    try{
      await deleteTodoList(deleteId[index].id);
      await  _getTodoList();
    }catch(e){
      console.log("error => ", e);
    }
  };

  const _getTodoList = async () => {
    try {
      setLoading(true);
      const response = await getTodoList(); // Check Loading
      setLoading(false);

      setTodoList([...response.data]); // Old data

      //console.log(typeof(response.data.length)); // set Index id
      //console.log("old id => ", indexState);

      setError(false); // Set error false
    } catch (e) {
      setError(true);
      console.log("Error =>", e);
    }
  };

  useEffect(() => {
    _getTodoList();
  }, []);

  return (
    <div className="card">
      <div className="form-container">
        <input
          className="input"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
          onKeyPress={handleEnter(1)}
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
                _getTodoList={_getTodoList}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todoform;
