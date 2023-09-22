import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:0
        }
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    increment(){
        // this.state.count = this.state.count+1;
        // this.setState({
        //     count: this.state.count+1
        // })
        // this.setState({
        //     count: this.state.count+1
        // },()=>{
        //     console.log(this.state.count);
        // })
        // console.log(this.state.count);
        this.setState((prevState)=>{
          return ({
            count: prevState.count +1
          })
        })
    }

    render() {
        return (
        <>
          <div>{this.state.count}</div>
          <button onClick={()=>{this.incrementFive()}}>Increment</button>
        </>
        )
    }
}

export default Counter;