import React, { Fragment } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import {delteComment} from '../../js/action/PostsAction'
import {delteCommentProf} from '../../js/action/ProfAction'
import './Style.css'

const Commenter = ({comment,postId,prof}) => {
   

      const user=useSelector(state=>state.authReducer.user)
       const dispatch=useDispatch()

    const onDelete=()=>{
         
        if(prof){
             dispatch(delteCommentProf(postId,comment._id))
         }else {
            dispatch(delteComment(postId,comment._id))
         }
      
    }

    return (
        <Fragment>
           
           <hr/>
           <div className='comment-delete'>
            <p className='pl-3 comment'><span className="name-comment">{comment.name}</span>:
            <span className="comment-text"> {comment.text}</span></p>
            {user.map(user=>user._id.toString()===comment.user.toString()?<span ><i onClick={onDelete} class="far fa-trash-alt card-footer"></i></span>:"")}
            </div>
            
     
        </Fragment>
    )
}


export default Commenter