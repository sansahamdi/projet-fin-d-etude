import React, { useEffect } from "react";

import { Provider } from "react-redux";

import { loadUser } from "./js/action/authAction";
import RouteContainer from './components/RouteContainer'

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
     <RouteContainer />
    </Provider>
  );
}

export default App;
