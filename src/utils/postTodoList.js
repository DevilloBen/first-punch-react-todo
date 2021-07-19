import axios from "axios";

const postTodoList = async (data) => {
  return await axios
    .post("http://localhost:3001/todos", { data })
    .than((resp) => {
      console.log(resp.data);
    })
    .catch((error) => {
      console.log("Error =>",error);
    });
};

export default postTodoList;
