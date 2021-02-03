import {
  CHAT_FAIL,
  CHAT_SUCCES,
  POST_MSG,
  CHAT_PROF_FAIL,
  CHAT_PROF_SUCCES,
} from "./Type";
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
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
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

    if (chatId.toString() !== "000000000000000000000000") {
      dispatch({
        type: POST_MSG,
        payload: { chatId, msg: res.data },
      });
    } else {
      alert("post chat");
    }
  } catch (err) {
    console.log(err.response.data);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const getProfChat = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:4000/api/discussion/prof/${id}`
    );

    dispatch({
      type: CHAT_PROF_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHAT_PROF_FAIL,
    });
  }
};

export const clearChat = () => (dispatch) => {
  dispatch({
    type: CHAT_FAIL,
  });
};
