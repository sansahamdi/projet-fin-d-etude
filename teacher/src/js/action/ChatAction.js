import { CHAT_FAIL, CHAT_SUCCES, POST_MSG } from "./Type";
import axios from "axios";

export const getUserChat = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/api/discussion`);

    dispatch({
      type: CHAT_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: CHAT_FAIL,
    });
  }
};

export const postMessageChat = (chatId, profId, form) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:4000/api/discussion/${chatId}/prof/${profId}`,
      form
    );
    console.log(res.data);
    dispatch({
      type: POST_MSG,
      payload: { chatId, msg: res.data },
    });
  } catch (err) {
    console.log(err.response.data);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};
