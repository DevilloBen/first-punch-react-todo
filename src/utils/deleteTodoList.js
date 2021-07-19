import axios from "axios";

const deleteTodoList = async (index) => {
   
  return await axios.delete("http://localhost:3001/todos/"+index)
    .than((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log("Error =>", error);
    });
};

export default deleteTodoList;
