import React from "react";
import { Container } from "react-bootstrap";

import ArticleList from "./ArticleList";

class Articles extends React.Component {
  render() {
    return (
      <Container>
        <ArticleList />
      </Container>
    );
  }
}

export default Articles;
