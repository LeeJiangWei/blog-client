import React from "react";
import { Card, Button } from "react-bootstrap";

class InfoCard extends React.Component {
  render() {
    return (
      <Card style={{ marginTop: "1em" }}>
        <Card.Header>About</Card.Header>
        <Card.Img
          varient="top"
          src={
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585573047958&di=0ff66a4106bd35222ddfb269abae1e87&imgtype=0&src=http%3A%2F%2Fimg.nga.178.com%2Favatars%2F2002%2F47c%2F940%2F003%2F60032124_0.jpg%3F60"
          }
        />
        <Card.Body>
          <Button variant="primary">New Article</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default InfoCard;
