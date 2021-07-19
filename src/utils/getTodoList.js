import axios from "axios";

const getTodoList = async () => {
  return await axios.get("http://localhost:3001/todos");
};

export default getTodoList;
