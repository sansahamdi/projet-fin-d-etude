import React, { useState } from "react";
import {useDispatch} from 'react-redux';

import {editPassword} from '../../js/action/EditTeacher'
import "./AccountSettings.css";

 const Security = ({history}) => {

   const dispatch=useDispatch()
   const[form,setForm]=useState({
    password:"",
    newPassword:"",
   })
   const [confirm,setConfirm]=useState()
   const onChange=(e)=>{
     setForm({...form,[e.target.name]:e.target.value})
   }
   
   const onSubmit=async(e)=>{
     e.preventDefault()
       await dispatch(editPassword(form))
     if(form.newPassword!==confirm){
       alert('confirm password incorrect')
     }
   
   }
   

  return (
    <div class="card-body tab-content">
      <div class="tab-pane active" id="security">
        <h6>SECURITY SETTINGS</h6>
        <hr />
        <form onSubmit={onSubmit} >
          <div class="form-group">
            <label class="d-block">Change Password</label>
            <input
              type="text"
              name="password"
              class="form-control"
              placeholder="Enter your old password"
              onChange={onChange}
            />
            <input
              type="text"
              name="newPassword"
              class="form-control mt-1"
              placeholder="New password"
              onChange={onChange}
            />
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Confirm new password"
              onChange={(e)=>setConfirm(e.target.value)}
            />
          </div>
        
        <hr />
        <button type='submit'  className="btn btn-primary btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};



export default  Security