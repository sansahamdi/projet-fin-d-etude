import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { User } from "./components/User/User";
import { AccountSettings } from "./components/AccountSettings/AccountSettings";
import { HomeApp } from "./components/home/HomeApp";
import NavBar from "./components/Nav/NavBar";
import LoginPage from "./components/LoginPage";
import PrivateRoute, { PrivateRouter } from "./components/PrivateRouter";
import { loadUser } from "./js/action/authAction";

import MessagesNotification from "./components/home/MessagesNotification";
import ProfProfile from "./components/profpage/ProfProfile";
import SetToken from "./headers/SetToken";
import store from "./js/Store";

if (localStorage.token) {
  SetToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
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
          <PrivateRouter path="/profile/:id" component={ProfProfile} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
