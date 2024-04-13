import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import Info from './Component/Info';
// import About from './Component/About';
// import ReachOut from './Component/ReachOut';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />
        <Info />
        {/* <About></About> */}
        {/* <ReachOut></ReachOut> */}
      </div>
    )
  }
}
