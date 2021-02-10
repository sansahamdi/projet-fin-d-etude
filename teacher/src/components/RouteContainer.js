import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { User } from "./User/User";
import { AccountSettings } from "./AccountSettings/AccountSettings";
import { HomeApp } from "./home/HomeApp";
import NavBar from "./Nav/NavBar";
import LoginPage from "./LoginPage";
import PrivateRoute, { PrivateRouter } from "./PrivateRouter";
import MessagesNotification from "./home/MessagesNotification";
import ProfProfile from "./profpage/ProfProfile";
import Chat from "./chat/Chat.js";
import { postMessageChat } from "../js/action/ChatAction";
import socketIOClient from "socket.io-client"

const socket = socketIOClient('http://localhost:4000');

  const RouteContainer = () => {
    const user = useSelector((state) => state.authReducer.user);
    const dispatch=useDispatch()

   
    socket.on(`add_message_${user[0]?._id}`, (data) => {
      console.log(data)
       dispatch({
         type:"GETMESSAGES",
         payload:data
       })
       //PushNotif
     });
     
    return (
        <div>
             <Router>
        <Route path="/" exact component={LoginPage} />
        <Route path="/profile" component={NavBar} />

        <Switch>
          <PrivateRoute path="/profile" exact component={HomeApp} />
          <PrivateRoute path="/profile/user" component={User} />
          <PrivateRoute
            path="/profile/settings"
            exact
            component={AccountSettings}
          />
          <PrivateRouter
            path="/profile/all-notification"
            component={MessagesNotification}
          />
          <PrivateRouter path="/profile/messages" component={Chat} />
          <PrivateRouter path="/profile/:id" component={ProfProfile} />
        </Switch>
      </Router>
        </div>
    )
}



export default RouteContainer