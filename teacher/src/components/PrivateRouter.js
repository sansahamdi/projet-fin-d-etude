import React, { Fragment } from 'react'
import {Redirect,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

export const PrivateRouter = ({component:Component ,...rest}) => {
           
    const auth =useSelector(state=>state.authReducer.auth)
    const loading =useSelector(state=>state.authReducer.loading)
 
     

    return (
        <Fragment>
            <Route {...rest} render={props=>!auth&&!loading?<Redirect to='/' /> :<Component {...props} />}  />
        </Fragment>
    )
}

export default PrivateRouter