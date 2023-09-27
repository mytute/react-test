import React, { Component } from "react";

class User extends Component {
  render() {
    const isLogged = true;
    return (
      //   <div>{this.props.name}</div>
      <div>{this.props.name(isLogged)}</div>
    );
  }
}

export default User;
