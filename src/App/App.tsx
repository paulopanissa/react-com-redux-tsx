import React, { Component } from 'react';
import './App.css';
import {State} from "./interfaces/State";

class App extends Component<any, State> {

  constructor(props: State) {
    super(props)

    // Pass 'this' for function
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentWillMount(): void {
    this.setState({
      message: 'Mount'
    })
  }

  handleOnClick(): void {
    this.setState({
      message: 'Hello World'
    })
  }


  render() {
    console.log(this.state.message);
    return (
        <div>
          <button onClick={this.handleOnClick}>Click</button>
          <p>{ this.state.message }</p>
        </div>
    );
  }
}

export default App;
