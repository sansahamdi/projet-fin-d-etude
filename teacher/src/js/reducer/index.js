import {combineReducers} from 'redux'
import alert  from './Alert.js'
import authReducer from './AuthReducer'
import posts from './PostsReducer'
import messages from './Message'
import prof from './ProfReducer'
import post from "./PostReducer";

const rootReducer= combineReducers({
     
    alert ,
    authReducer,
    posts,
    messages,
    prof,
    post,
})







export default rootReducer;
