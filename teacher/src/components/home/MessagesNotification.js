import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getMessage} from '../../js/action/MessageAction'
import './Style.css'

 const MessagesNotification = () => {
     
    const msg=useSelector(state=>state.messages.msg)
    const loading=useSelector(state=>state.messages.loading)
    const dispatch=useDispatch()

    useEffect(()=>{
      
        dispatch(getMessage())
    },[dispatch])

    if(loading || !msg){

        return (
            <h1>...loading</h1>
        )
    }

    return (
          <div className='notification'>
         {msg.map(msg=>(
            <div className='notif-msg'>
                <p >
                 {msg.msg}
                 </p>
                 </div>
         ))}
        </div>
    )
}


export default MessagesNotification