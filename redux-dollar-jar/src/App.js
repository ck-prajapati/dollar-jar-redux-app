import React from 'react';
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import './App.css';

import Home from "./component/Home";
import UserContainer from "./container/UserContainer"
import {connect} from 'react-redux'

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/add-user" component={UserContainer} />
        </Switch>
    </Router>  
  );
}

export default connect()(App);
