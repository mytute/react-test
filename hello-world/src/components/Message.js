import React, { Component } from 'react';

export class Message extends Component {
  
  constructor(){
    super();
    this.state = {
        message: "Welcome Visitor"
    }
  }
  
  changeMessage(){
    this.setState({
        message: "Thank you for subscribing"
    })
  }

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        <button onClick={()=>{this.changeMessage()}} >Click</button>
      </>
    )
  }
}

export default Message;