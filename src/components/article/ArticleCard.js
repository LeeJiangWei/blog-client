import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class ArticleCard extends React.Component {
  render() {
    const { article } = this.props;
    return (
      <Card style={{ marginBottom: "1em" }}>
        <Card.Body>
          <Link
            to={`/articles/${article.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card.Title>{article.title || "No title"}</Card.Title>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">
          {new Date(article.createDate).toLocaleString()}
        </Card.Footer>
      </Card>
    );
  }
}

export default ArticleCard;
