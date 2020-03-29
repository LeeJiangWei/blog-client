import React from "react";
import { Card } from "react-bootstrap";

class ArticleCard extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <Card style={{ marginTop: "1em" }}>
        <Card.Body>
          <Card.Title>{article.title || "No title"}</Card.Title>
          <Card.Text>{article.body}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {new Date(article.createDate).toLocaleTimeString()}
        </Card.Footer>
      </Card>
    );
  }
}

export default ArticleCard;
