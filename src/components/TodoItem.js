import React, { useState } from "react";
import { Modal } from "../components";
import { updateTodoList } from "../utils";

const Todoltem = (props) => {
  const { todo, index, handleDelete, _getTodoList } = props;
  const [inputState, setInputState] = useState(todo.title);
  const [showModal, setShowModal] = useState(false);

  const handleUpdate = async () => {
    handleModal();
    const updateData = {
      userId: 1,
      title: inputState, // add new Data  id auto incres
      completed: false,
      id: todo.id,
    };
    // console.log(index + "  " + updateTitle);
    // console.log(updateId);
    try {
      await updateTodoList(updateData);
      await _getTodoList();
      
    } catch (e) {
      console.log("error => ", e);
    }
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="input-text box">
      <div className="input-title">{todo.title}</div>
      <button className="btn-edit" type="button" onClick={handleModal}>
        ?
      </button>
      <div className="col-s"></div>
      <button
        className="btn-del"
        type="button"
        onClick={() => handleDelete(index)}
      >
        X
      </button>
      <Modal
        handleModal={handleModal}
        showModal={showModal}
        handleUpdate={handleUpdate}
        title={inputState}
      >
        <div className="text-1">Hello world Modal</div>
        <input
          className="input-text"
          type="text"
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default Todoltem;
