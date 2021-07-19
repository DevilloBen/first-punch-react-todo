import axios from "axios";

const deleteTodoList = async (index) => {
   
  return await axios.delete("http://localhost:3001/todos/"+index)

};

export default deleteTodoList;
