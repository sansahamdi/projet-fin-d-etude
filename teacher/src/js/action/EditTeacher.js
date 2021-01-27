import { EDIT_TEACHER ,EDIT_PASSWORD} from "./Type";
import axios from "axios";

export const editTeacherById = (id, FormData) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/prof/${id}`, FormData);
    
    dispatch({
      type: EDIT_TEACHER,
      payload: res.data,
    });
    alert("edit user");
  } catch (err) {
    console.log(err)
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
};

export const editPassword=(form)=>async dispatch=>{

  try {
        await axios.post('http://localhost:4000/api/prof/password',form)  

        dispatch({
          type:EDIT_PASSWORD
        })
       await alert('password change')
       

  } catch (err) {
    const error = err.response.data;
    if (Array.isArray(error)) {
      error.forEach((err) => alert(err.msg));
    }
  }
}
