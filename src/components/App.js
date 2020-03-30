import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Articles from "./article";
import ArticleDetail from "./article/ArticleDetail";
import NewArticle from "./article/NewArticle";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/" exact component={Articles} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/articles/new" exact component={NewArticle} />
          <Route path="/articles/:articleId" exact component={ArticleDetail} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
