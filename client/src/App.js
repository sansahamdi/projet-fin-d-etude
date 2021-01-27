import React, { Fragment } from 'react';
import NavBar from './Components/layout/NavBar';
import Filter from './Components/Filter';
import AddUser from './Components/AddUser';
import Login from './Components/forms/Login';
import Alert from './Components/layout/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <section className='container'>
          <Alert />
          <Switch>
            <Route path='/addUser' component={AddUser} />
            <Route path='/filter' component={Filter} />
            <Route path='/login' component={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
