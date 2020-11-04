import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { actions } from "./redux";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Board from "./components/Board";
import BoardView from "./components/Board/BoardView";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Profile from "./components/Auth/Profile";
import ChangePassword from "./components/Auth/ChangePassword";
import { boardApi, cardApi } from "./services";

const Routing = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchData = async (user, token) => {
    const boards = await boardApi.getBoards(token);
    const cards = await cardApi.getCards(token);
    const data = { boards, cards };
    dispatch(actions.getAllNecessaryData(data));
    dispatch(actions.signin({ user, token }));
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (!user) {
      history.push("/signin");
    } else {
      fetchData(user, token);
    }
  }, []);

  return (
    <Switch>
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/profile" exact component={Profile} />
      {/* <Route path="/changepassword" exact component={ChangePassword} /> */}
      <Route path="/" exact component={Board} />
      <Route path="/:id" component={BoardView} />
    </Switch>
  );
};

function App() {
  const token = useSelector((state) => state.app.token);

  return (
    <Router>
      {token && <Header />}
      <Routing />
    </Router>
  );
}

export default App;
