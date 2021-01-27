import {POSTPROF_SUCCES,POSTPROF_FAIL,REMOVE_COMMENTPROF,ADD_COMMENTPROF, LIKE_POSTPROF,GETPROF_FAIL,GETPROF_ID} from './Type'
import axios from 'axios'



export const getPostProf=(id)=>async dispatch=>{
    try {
        
          const res= await axios.get(`http://localhost:4000/api/post/${id}`)
         dispatch({
             type:POSTPROF_SUCCES,
             payload:res.data
         })
    } catch (err) {
        console.log(err.response.data)
        dispatch({
            type:POSTPROF_FAIL,
           
        })
    }

}

export const likePost=(id,like)=>async dispatch=>{
            
         
  
    try {
           if(like){
               const res=await axios.put(`http://localhost:4000/api/post/like/${id}`)
                 
               dispatch({
                   type:LIKE_POSTPROF,
                   payload: {id,likes:res.data}
               })
           }else{
               const res= await axios.delete(`http://localhost:4000/api/post/like/${id}`)
               
             dispatch({
               type:LIKE_POSTPROF,
               payload:{id,likes:res.data}
               
             })

           }
        


    } catch (err) {
      console.log(err)
        
}
}

export const addComment=(id,text)=>async dispatch=>{

  try {
        const res=await axios.put(`http://localhost:4000/api/post/${id}`,text) 
        console.log(res.data)
        dispatch({
          type:ADD_COMMENTPROF,
          payload:{id,comment:res.data}
        })    

  } catch (err) {
    
    const error=err.response.data 
    if(Array.isArray(error)){
      error.forEach(err=>alert(err.msg))
    }
    
  }
}

export const delteCommentProf=(idPost,idComment)=>async dispatch=>{

  try {
        const res=await axios.delete(`http://localhost:4000/api/post/${idPost}/comment/${idComment}`) 
        console.log(res.data)
        dispatch({
          type:REMOVE_COMMENTPROF,
          payload:{idPost,idComment}
        })    

  } catch (err) {
    console.log(err.response.data)
    const error=err.response.data 
    if(Array.isArray(error)){
      error.forEach(err=>alert(err.msg))
    }
    
  }
}

export const getProf=(id)=> async dispatch =>{

  try {
      const res= await axios.get(`http://localhost:4000/api/prof/${id}`)
       dispatch({
         type:GETPROF_ID,
         payload:res.data
       })

  } catch (err) {
    
    const error=err.response.data 
    if(Array.isArray(error)){
      error.forEach(err=>alert(err.msg))
    }

  dispatch({
    type:GETPROF_FAIL,

  })
}
}
