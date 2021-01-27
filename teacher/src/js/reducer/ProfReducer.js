import {POSTPROF_FAIL,POSTPROF_SUCCES,LIKE_POSTPROF,ADD_COMMENTPROF,REMOVE_COMMENTPROF,GETPROF_ID} from '../action/Type'

const initialState ={
    prof:[],
    profPost:null,
    isLoading:true,
}

const reducer=(state=initialState,action)=>{
      
    const {payload}=action
    switch(action.type){
     case POSTPROF_SUCCES:
         return {...state,profPost:payload,isLoading:false}
      case POSTPROF_FAIL:
          return {...state,profPost:null,isLoading:false}  
           case LIKE_POSTPROF:
            return {
                ...state,
                profPost: state.profPost.map(post =>post._id === payload.id ? { ...post, like: payload.likes } : post)}
                  case ADD_COMMENTPROF:
            return {
                ...state,
                profPost: state.profPost.map(post =>post._id === payload.id ? { ...post, comment: payload.comment } : post)
                
            }
         case REMOVE_COMMENTPROF:
             return {...state,
                 profPost:state.profPost.map(post=>post._id===payload.idPost?{...post,comment:post.comment.filter(comment=>comment._id!==payload.idComment)}:post)
                }  
         case GETPROF_ID:
             return  {...state,prof:[payload],isLoading:false}
             case GETPROF_ID:
                return  {...state,isLoading:false}        
          default:
              return state 
    }

}
 

export default reducer