import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../src/pages/Main";
import Board from "../src/pages/Board";
import Task from "../src/pages/Task";
import Calendar from "../src/pages/Calendar";
import Signin from './pages/Signin';

import Nav from "./components/Nav/Nav";


class Routes extends Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
