import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Samadhi'
      }
      this.timer = null;
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
          this.setState({name:'Laksahan'})
        }, 2000)
    }
    componentWillUnmount(){
      clearInterval(this.timer);
    }
  render() {
    console.log("************ parent component render ******************");
    return (
      <div>
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp;