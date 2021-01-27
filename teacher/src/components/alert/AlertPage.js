import React, { Fragment } from 'react'
import {useSelector} from 'react-redux'
import './Alert.css'

export const AlertPage = () => {
        
       const alert = useSelector(state=>state.alert)

    return (
        <div>
            {alert.map(alert=>(
                <Fragment>
                    <p className={alert.type} >{alert.msg}</p>
                </Fragment>
            ))}
        </div>
    )
}


export default AlertPage
