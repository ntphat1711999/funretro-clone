import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import Board from "./components/Board";
import BoardView from "./components/Board/BoardView";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import "./App.css";

const Routing = () => {
  const history = useHistory();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (!user) {
  //     history.push("/signin");
  //   }
  // }, []);

  return (
    <Switch>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/board" exact component={Board} />
      <Route path="/board/:id" component={BoardView} />
    </Switch>
  );
};

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routing />
    </Router>
  );
}

export default App;
