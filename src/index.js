import React from "react";
import ReactDOM from "react-dom";
import { Login, Signup, Main } from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <Route path="/" component={Login} exact />
      <Route path="/signup" component={Signup} />
      <Route path="/main" component={Main} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
