import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import  Greet  from './components/GreetMessage';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

export default class App extends Component {
  render() {
    return (
      <div>
          <div className="App">
            <Greet />

            {/* <Component1 name="Bruce">
              <p>This is children props</p>
              <p>Another one</p>
            </Component1>
            <Component1 name="Clark" />
            <Component1 name = "Diana" /> */}
            {/* <Component2 /> */}
            {/* <Component3 /> */}
          </div>
      </div>
    )
  }
}