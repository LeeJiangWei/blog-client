import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import ArticleList from "./ArticleList";
import InfoCard from "./InfoCard";

class Articles extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xl={9}>
            <ArticleList />
          </Col>
          <Col>
            <InfoCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
