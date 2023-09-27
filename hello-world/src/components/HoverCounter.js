import React, { Component } from "react";
import UpdatedComponent from "./withCounter";

class HoverCounter extends Component {
  // ******** copied from CounterClick.js ******** //
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
  // ***** end of copied from CounterClick.js ***** //
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCount}>
          {this.props.age} Hovered {this.props.count} times
        </h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter, 5);
