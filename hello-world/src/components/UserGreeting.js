import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Samadhi</div>
    // }else{
    //     return <div>Welcome Gust</div>
    // }

    // let message;
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Samadhi</div>;
    // }else{
    //     message = <div>Welcome Gust</div>;
    // }
    // return <div>{message}</div>

    // return this.state.isLoggedIn ?  <div>Welcome Samadhi</div> : <div>Welcome Gust</div>

    return this.state.isLoggedIn && <div>Welcome Samadhi</div>


  }
}
export default UserGreeting;