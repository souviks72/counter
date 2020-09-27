import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      count : 0
    }
    this.clickMinus = this.clickMinus.bind(this);
    this.clickPlus = this.clickPlus.bind(this);
  }

  clickPlus(){
    this.setState(prevState => {
      return {count: prevState.count+1}
    });
  }

  clickMinus(){
    this.setState(prevState => {
      return {count: prevState.count-1}
    });
  }

  render(){
    return (
      <div className="App">
        <h4>{this.state.count}</h4>
        <button onClick={this.clickPlus}>+</button>
        <button onClick={this.clickMinus}>-</button>
      </div>
    );
  }
  
}

export default App;
