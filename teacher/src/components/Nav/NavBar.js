import React from 'react'
import Drap from '../asset/drap.png'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logOut} from '../../js/action/authAction'
import './NavBar.css'

const NavBarTest = () => {

        const dispatch=useDispatch()

        const onClickOut=()=>{
            dispatch(logOut())
        }

    return (
        <div className='navbar'>
            <img src={Drap} alt="drap" />
            <div className='user-position ' >
            
                   <Link className='mr-5 lien' to='/profile'><i className="fas fa-home mr-2"></i></Link>
                   <Link className='mr-5 lien' to='/profile/user'><i className="fas fa-user mr-2"></i></Link>
                    <Link className='mr-5 lien' to='/profile/settings'><i className="fas fa-cogs mr-2"></i></Link>
                    <Link className='mr-5 lien' to='/' onClick={onClickOut} ><i className="fas fa-sign-out-alt mr-2"></i>logout</Link>
            
            </div>
            
        </div>
    )
}



export default NavBarTest