#  Basics of Form Handling  

form elements whose value is controlled by react is called a controlled components.   

1. show how to control input text in the form tag using react state.    
* create new class component call 'Form' and add 'label' and 'input' elements in it and show it is working as regular input on the browser.   
* in component create new state call username and add input value to this state and show now your input values not update on input element on browser.   
* in component add 'onChange' event to change state for input element and now show input values are update on the browser.    

Form.js   
```js 
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
      </form>
    );
  }
}

export default Form;   
```

2. show how to add textarea as control form in react.
Form.js   
```js 

    this.state = {
      username: '',
      comment: ''
    };
  

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  render() {
    return (
      <form>
        <div>
          <label>Comment</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          />
        </div>
      </form>
    );
  }
```

3. show how to add select element as control form in react.
Form.js   
```js 

    this.state = {
      username: '',
      comment: '',
      topic:'react'
    };
  
  handleTopicChange = (event) => {
    this.setState({ topic: event.target.value });
  };

  render() {
    return (
      <form>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
             <option value="react">React</option>
             <option value="angular">Angular</option>
             <option value="view">View</option>
          </select>
        </div>
      </form>
    );
  }
```

4. let's see how to submit form data.   
* add 'onSubmit' event for form tag.  
* add 'event.preventDefault()' function to 'handleSubmit' function not to refresh ater submit.

Form.js   
```js 

    this.state = {
      username: '',
      comment: '',
      topic:'react'
    };
  
  handleSubmit = (event) =>{
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit" >submit</button>
      </form>
    );
  }
```