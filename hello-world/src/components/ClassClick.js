import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log('button click');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
