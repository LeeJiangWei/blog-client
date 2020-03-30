import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import qs from "qs";

class NewArticle extends React.Component {
  state = { title: "", body: "" };

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitButtonClicked = async () => {
    const { title, body } = this.state;
    try {
      const { data } = await axios.post(
        "/articles",
        qs.stringify({ title, body }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      this.props.history.push(`/articles/${data.id}`);
    } catch (e) {}
  };

  render() {
    const { title, body } = this.state;
    return (
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>
              <h3>标题</h3>
            </Form.Label>
            <Form.Control
              size="lg"
              type="text"
              placeholder="标题不能为空"
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
          <Button
            variant="outline-primary"
            onClick={this.onSubmitButtonClicked}
          >
            提交
          </Button>
          <Button
            style={{ marginLeft: "1em" }}
            variant="outline-secondary"
            onClick={() => this.props.history.push("/articles")}
          >
            取消
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewArticle;
