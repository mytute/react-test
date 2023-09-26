import React, { Component } from "react";
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Samadhi'
    };
    console.log('LifecycleA constructor ')
  }
  static getDerivedStateFromProps(props, state){
    console.log('LifecycleA getDerivedStateFromProps');
    return null;
  }
  componentDidMount = () =>{
    console.log('LifecycleA componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate');
  }
  changeState = () =>{
    this.setState({name:'Laksahan'})
  }
  render() {
    console.log('LifecycleA render');
    return (
        <div>
            <div>LifecycleA</div>
            <button onClick={changeState}>Change State</button>
            <div> <LifecycleB/> </div>
        </div>
    );
  }
}

export default LifecycleA;
