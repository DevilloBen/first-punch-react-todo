import React, { useState } from "react";
import { Modal } from "../components";
const Description = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="card">
      <h1 className="text-1">Title - 1</h1>
      <div className="text-2">
        Todo List use useState, React Hook, Axios, Json-server, Css, JavaScripts, Api, Folder Structure, Promise,
      </div>
      <br />
      <button className="btn-add" type="button" onClick={handleModal}>
        Open
      </button>

      <Modal handleModal={handleModal} showModal={showModal}>
        <div className="text-1">Hello world Modal!!</div>
      </Modal>
    </div>
  );
};

export default Description;
