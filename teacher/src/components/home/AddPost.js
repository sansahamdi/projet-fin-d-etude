import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import {addPost} from '../../js/action/PostsAction'
import "./Style.css";

export const AddPost = () => {
          
           const dispatch=useDispatch()
          
           const[form,setForm]=useState({
             text:""
           })

        const postAdd=(e)=>{
          e.preventDefault()
         
          dispatch(addPost(form))
          setForm({
            text:""
          })
        }   

     
  return (
    <div className="card gedf-card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <a href="/" className="nav-link active">
              Make a publication
            </a>
          </li>
         
        </ul>
      </div>
      <div className="card-body">
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="form-group">
              <label className="sr-only" for="message">
                post
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                value={form.text}
                onChange={(e)=>setForm({...form,text:e.target.value})}
                placeholder="What are you thinking?"
              ></textarea>
            </div>
          </div>
          <div className="tab-pane fade">
            <div className="form-group">
              <div className="custom-file">
                <input type="file" className="custom-file-input" />
                <label className="custom-file-label" for="customFile">
                  Upload image
                </label>
              </div>
            </div>
            <div className="py-4"></div>
          </div>
        </div>
        <div className="btn-toolbar justify-content-between">
          <div className="btn-group">
            <button type="submit" onClick={postAdd} className="btn btn-primary">
              share
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};
