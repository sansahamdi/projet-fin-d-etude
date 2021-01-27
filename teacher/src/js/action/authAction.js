
import {LOGIN_FAIL,LOGIN_SUCCES,USER_FAIL,USER_SUCCES,LOGOUT} from './Type'
import axios from 'axios'
import {setAlert} from './Alert'
import SetToken from '../../headers/SetToken'

export const loginSucces=(form)=> async dispatch =>{
    
    try {
        const res= await axios.post("http://localhost:4000/api/prof/me/auth",form)
        
       console.log(res.data)
        dispatch({
            type:LOGIN_SUCCES,
            payload :res.data
        })
        
    } catch (err) {
        console.log(err)
        const error=err.response.data
       
        if(Array.isArray(error)){
            error.forEach(err=> dispatch(setAlert(err.msg,"alert alert-danger text-center")))
        }

        dispatch({
            type:LOGIN_FAIL,

        })
        
    }

}

export const loadUser =()=>async dispatch=>{
        if(localStorage.token){
            SetToken(localStorage.token)
        }

    try {
          const res=await axios.get("http://localhost:4000/api/prof/me/user") 
          
          dispatch({
              type:USER_SUCCES,
              payload:res.data,
          })
        

    } catch (err) {
       

        dispatch({
            type:USER_FAIL,

        })
        
    }
}

export const logOut=()=>dispatch=>{

    dispatch({
        type:LOGOUT
    })
}