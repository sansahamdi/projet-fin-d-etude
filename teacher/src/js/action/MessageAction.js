import { MESSAGE_FAIL, MESSAGE_SUCCES } from "./Type";
import axios from "axios";

export const getMessage = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/api/msg");
    dispatch({
      type: MESSAGE_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err));
    }

    dispatch({
      type: MESSAGE_FAIL,
    });
  }
};
