import {
  
  LIKE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  ADD_POST,
  REMOVE_POST,
  PAGINATE_FAIL,
  PAGINATE_SUCCES
 
} from "../action/Type";

const initailState = {
    posts: [],
    userPost: [],
    loading: true,
   
}


const reducer = (state = initailState, action) => {
  
       const {payload}=action

        switch (action.type) {
        case PAGINATE_SUCCES:
            return { ...state, posts:[...state.posts,payload.docs], loading: false,page:payload.totalPages }
        case PAGINATE_FAIL:
            return { ...state,posts:[],loading: false } 

       case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post =>post.map(post=>post._id === payload.id ? { ...post, like: payload.likes } : post))
               
            }

        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post=>post.map(post=>post._id === payload.id ? { ...post, comment: payload.comment } : post))
                
            }
         case REMOVE_COMMENT:
             return {...state,
                 posts:state.posts.map(post=>post.map(post=>post._id===payload.idPost?{...post,comment:post.comment.filter(comment=>comment._id.toString()!==payload.idComment)}:post))
                } 
          case ADD_POST:
              return {...state,posts:state.posts.map(post=>[payload,...post])}
          case REMOVE_POST:
              return {...state,posts:state.posts.map(post=>post.filter(post=>post._id!==payload))}           
        default:
            return state
    }
}


   

export default reducer;
