import React, { Component } from 'react';

export class Welcome extends Component {
    
  render() {
    return (
      <div>Welcome {this.props.firstName} {this.props.lastName}</div>
    )
  }
}

export default Welcome;