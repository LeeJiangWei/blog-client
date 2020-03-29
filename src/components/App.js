import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Articles from "./article";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/articles" exact component={Articles} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
