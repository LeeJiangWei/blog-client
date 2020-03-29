import React from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

class ArticleList extends React.Component {
  state = { articles: [] };

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    try {
      const { data } = await axios.get("/articles");
      this.setState({ articles: data });
    } catch (e) {}
  };

  render() {
    return this.state.articles.map((article, index) => (
      <ArticleCard key={index} article={article} />
    ));
  }
}

export default ArticleList;
