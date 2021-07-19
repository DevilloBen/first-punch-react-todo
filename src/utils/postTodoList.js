import axios from "axios";

const postTodoList = async (data) => {
  //console.log(data)
  return await axios.post("http://localhost:3001/todos",data); // if {} up path
};

export default postTodoList;
