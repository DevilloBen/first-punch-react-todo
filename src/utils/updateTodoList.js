import axios from "axios";

const updateTodoList = async (data) => {
  //console.log(data)
  return await axios.put("http://localhost:3001/todos/"+data.id,data); // if {} up path
};

export default updateTodoList;