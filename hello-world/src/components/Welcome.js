import React, { Component } from 'react';

export class Welcome extends Component {
    
  render() {
    const {firstName, lastName}= this.props; 
    return (
      <div>Welcome {firstName} {lastName}</div>
    )
  }
}

export default Welcome;