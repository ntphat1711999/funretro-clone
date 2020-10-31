import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Board from "./components/Board";
import BoardView from "./components/Board/BoardView";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/board" exact component={Board} />
        <Route path="/board/:id" component={BoardView} />
      </Switch>
    </Router>
  );
}

export default App;
