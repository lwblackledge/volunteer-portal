import React from "react";
import axios from "axios";

export default class ServerTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      time: null
    };
  }

  componentDidMount() {
    axios.get("/api/test")
      .then(res => {
        this.setState({
          isLoaded: true,
          time: res.data
        });
      },
      error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }

  render() {
    const { error, isLoaded, time } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div>Server Time: {time}</div>;
    }
  }
}
