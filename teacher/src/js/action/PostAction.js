import { POST_FAIL, POST_SUCCES, DELETE_USER_POST, REMOVE_POST } from "./Type";
import axios from "axios";

export const getPostById = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/api/post/me");
    dispatch({
      type: POST_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const removePost = (id) => async (dispatch) => {
  console.log(id);
  try {
    await axios.delete(`http://localhost:4000/api/post/delete/${id}`);
    dispatch({
      type: DELETE_USER_POST,
      payload: id,
    });
    dispatch(deletePost(id));
  } catch (err) {
    console.log(err);
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/api/post/delete/${id}`);
    dispatch({
      type: REMOVE_POST,
      payload: id,
    });
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};
