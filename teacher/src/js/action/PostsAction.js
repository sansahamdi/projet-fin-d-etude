import {
 
  LIKE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  PAGINATE_FAIL,
  PAGINATE_SUCCES
} from "./Type";
import axios from "axios";

/* export const getPost = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:4000/api/post/all");
    dispatch({
      type: POSTS_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: POSTS_FAIL,
    });
  }
}; */

export const getPosts = (form) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4000/api/post/paginate",form);
    dispatch({
      type: PAGINATE_SUCCES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PAGINATE_FAIL,
    });
  }
};
 
export const clearPosts=()=>dispatch=>{

  dispatch({
    type:PAGINATE_FAIL
  })
}

export const likePost = (id, like) => async (dispatch) => {
  try {
    if (like) {
      const res = await axios.put(`http://localhost:4000/api/post/like/${id}`);

      dispatch({
        type: LIKE_POST,
        payload: { id, likes: res.data },
      });
    } else {
      const res = await axios.delete(
        `http://localhost:4000/api/post/like/${id}`
      );

      dispatch({
        type: LIKE_POST,
        payload: { id, likes: res.data },
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const addComment = (id, text) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:4000/api/post/${id}`, text);
    console.log(res.data);
    dispatch({
      type: ADD_COMMENT,
      payload: { id, comment: res.data },
    });
  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const delteComment = (idPost, idComment) => async (dispatch) => {
  try {
    const res = await axios.delete(
      `http://localhost:4000/api/post/${idPost}/comment/${idComment}`
    );
    console.log(res.data);
    dispatch({
      type: REMOVE_COMMENT,
      payload: { idPost, idComment },
    });
  } catch (err) {
   
    const error=err.response.data 
    if(Array.isArray(error)){
      error.forEach(err=>alert(err.msg))
    }
  }
};

export const addPost = (text) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:4000/api/post", text);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err)
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
    console.log(err)
    const error=err.response.data
    if(Array.isArray(error)){
      error.forEach(err=>alert(err.msg))
    }
  }
};
