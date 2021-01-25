import axios from "axios";
import Error from "next/error";
import React from "react";
import StoryList from "../components/StoryList";

class Index extends React.Component {
  static async getInitialProps() {
    let stories;
    try {
      const response = await axios.get(
        "https://node-hnapi.herokuapp.com/news?page=1"
      );
      stories = await response.data;
    } catch (error) {
      console.log(err);
      stories = [];
    }

    return { stories };
  }

  render() {
    const { stories } = this.props;

    if (stories.length === 0) {
      return <Error statusCode={503} />;
    }

    return (
      <div>
        <h1>Hacker News</h1>
        <StoryList stories={stories} />
      </div>
    );
  }
}

export default Index;
