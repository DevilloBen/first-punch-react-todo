import axios from "axios";
import { MOCK_API_ENDPOINT } from "../constants";

const deleteTodoList = async (index) => {
  return await axios.delete(`${MOCK_API_ENDPOINT}/todos/${index}`);
};

export default deleteTodoList;
