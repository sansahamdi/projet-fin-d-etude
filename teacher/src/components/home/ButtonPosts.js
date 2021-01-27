import React, { useState } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { getPosts } from "../../js/action/PostsAction";
import "./Style.css"

 const ButtonPosts = () => {
        
    const [page,setPage]=useState(2)
    const [limit]=useState(2)
    const toatlPage= useSelector(state=>state.posts.page)
    
    const dispatch=useDispatch()
       
    const paginate=()=>{
         dispatch(getPosts({page,limit}))
         setPage(page+1)
    }

    return (
        <div className="button-posts">
           {page<=toatlPage ? <i class="fas fa-angle-double-down" onClick={paginate}></i>:""}
        </div>
    )
}


export default ButtonPosts