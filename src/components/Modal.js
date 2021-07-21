import React from "react";

const Modal = ({ showModal, children, handleModal, handleUpdate}) => {
  if (!showModal) return null;

  return (
    //จัดหน้าตา Modal
    <>
      <div className="overlay-styles" />
      <div className="modal-styles">
        {children}
        <div className="form-container-edit">
          <button className="btn-del" type="button" onClick={handleModal}>
            x
          </button>
          <button className="btn-success" type="button" onClick={handleUpdate}>
            ok
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
