import React, { Component } from "react";

export class ClassTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    this.interval = null;
  }

  componentDidMount() {
    console.log("component did mount ***************");
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>ClassTimer {this.state.count}</h2>
        <button
          onClick={() => {
            clearInterval(this.interval);
          }}
        >
          Stop Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
