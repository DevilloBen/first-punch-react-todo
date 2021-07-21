import axios from "axios";
import { MOCK_API_ENDPOINT } from "../constants";

const postTodoList = async (data) => {
  //console.log(data)
  return await axios.post(`${MOCK_API_ENDPOINT}/todos`,data); // if {} up path
};

export default postTodoList;
