import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
