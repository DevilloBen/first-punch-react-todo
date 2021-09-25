import React, { useState } from "react";
import { Modal } from "../components";
import { useTranslation } from "react-i18next";

const Description = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleLanguage = (value) => {
    i18n.changeLanguage(value)
    localStorage.setItem("language", value);
  };

  return (
    <div className="card">
      <h1 className="text-1">Title - 1</h1>
      <div className="text-2">
        {t("Paragraph")}
        Todo List use useState, React Hook, Axios, Json-server, Css,
        JavaScripts, Api, Folder Structure, Promise,
      </div>
      <br />
      <button className="btn-add" type="button" onClick={handleModal}>
        Open
      </button>
      <label for="language">Choose a language:</label>
      <select name="language" id="language" onChange={(e)=>handleLanguage(e.target.value)}>
        <option value="en">EN</option>
        <option value="th">TH</option>
        <option value="jp">JP</option>
      </select>

      <Modal handleModal={handleModal} showModal={showModal}>
        <div className="text-1">Hello world Modal!!</div>
      </Modal>
    </div>
  );
};

export default Description;
