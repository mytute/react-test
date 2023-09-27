import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class ClickCounter extends Component {
    //   constructor(props) {
    //     super(props);

    //     this.state = {
    //       count: 0,
    //     };
    //   }
    //   incrementCount = () => {
    //     this.setState((prevState) => ({
    //       ...prevState,
    //       count: prevState.count + 1,
    //     }));
    //   };
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
        {this.props.age} Click {this.props.count} time
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter,10);
