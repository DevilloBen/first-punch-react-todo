import axios from "axios";
import { MOCK_API_ENDPOINT } from "../constants";

const getTodoList = async () => {
  return await axios.get(`${MOCK_API_ENDPOINT}/todos`);
};

export default getTodoList;
