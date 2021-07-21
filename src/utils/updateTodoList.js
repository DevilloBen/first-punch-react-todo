import axios from "axios";
import { MOCK_API_ENDPOINT } from "../constants";

const updateTodoList = async (data) => {
  //console.log(data)
  return await axios.put(`${MOCK_API_ENDPOINT}/todos/` + data.id, data); // if {} up path
};

export default updateTodoList;
