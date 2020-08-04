import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import "antd/dist/antd.css";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <Route>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path={["/"]} component={Post} />
            {/* <Route exact path="/about" component={About} /> */}
          </Switch>
        </div>
      </div>
    </Route>
  );
}

export default App;
