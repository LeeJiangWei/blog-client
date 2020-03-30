import React from "react";
import axios from "axios";
import qs from "qs";

import { Container, Card, Button, Row, Col, Form } from "react-bootstrap";

const BUTTON_STYLE = { float: "right", marginLeft: "5px" };

class ArticleDetail extends React.Component {
  state = {
    article: { title: "", body: "" },
    isEditing: false,
    temp: { title: "", body: "" },
  };

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    const { articleId } = this.props.match.params;
    try {
      const { data } = await axios.get(`/articles/${articleId}`);
      this.setState({ article: data, temp: data });
    } catch (e) {}
  };

  onInputChange = (e) => {
    const { name, value } = e.target;
    let { temp } = this.state;
    temp[name] = value;
    this.setState({ temp });
    console.log(this.state.temp);
  };

  onEditButtonClicked = async () => {
    this.setState({ isEditing: true });
  };

  onDeleteButtonClicked = async () => {
    const { id } = this.state.article;
    try {
      const { data } = await axios.delete(`/articles/${id}`);
      this.props.history.goBack();
    } catch (e) {}
  };

  onSubmitButtonClicked = async () => {
    const { articleId } = this.props.match.params;
    const { title, body } = this.state.temp;
    try {
      const { data } = await axios.put(
        `/articles/${articleId}`,
        qs.stringify({ title, body }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      this.setState({ article: data, temp: data, isEditing: false });
    } catch (e) {}
  };

  editWindow = () => {
    const { title, body } = this.state.temp;
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>
            <h3>标题</h3>
          </Form.Label>
          <Form.Control
            size="lg"
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={this.onInputChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>正文</Form.Label>
          <Form.Control
            as="textarea"
            rows="15"
            name="body"
            value={body}
            onChange={this.onInputChange}
          />
        </Form.Group>
        <Button variant="outline-primary" onClick={this.onSubmitButtonClicked}>
          提交
        </Button>
        <Button style={{ marginLeft: "1em" }} variant="outline-secondary">
          取消
        </Button>
      </Form>
    );
  };

  detailCard = () => {
    const { title, body, createDate } = this.state.article;
    return (
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>{title || "No title"}</h1>
          </Card.Title>
          <Card.Subtitle>
            <Row>
              <Col>
                发表于：
                {new Date(createDate).toLocaleString()}
              </Col>
              <Col>
                <Button
                  style={BUTTON_STYLE}
                  size="sm"
                  variant="outline-primary"
                  onClick={this.onEditButtonClicked}
                >
                  编辑
                </Button>
                <Button
                  style={BUTTON_STYLE}
                  size="sm"
                  variant="outline-danger"
                  onClick={this.onDeleteButtonClicked}
                >
                  删除
                </Button>
              </Col>
            </Row>
          </Card.Subtitle>
          <div
            style={{
              backgroundColor: "#E6E3E3",
              height: "1px",
              marginTop: "1em",
              marginBottom: "1em",
            }}
          />
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  render() {
    const { isEditing } = this.state;
    return (
      <Container>
        {isEditing && this.editWindow()}
        {!isEditing && this.detailCard()}
      </Container>
    );
  }
}

export default ArticleDetail;
