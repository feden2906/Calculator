import React, {Component} from 'react';
import './App.css'
import Calculator from "./calculator/Calculator";

class App extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Calculator/>
        </div>
    );
  }
}

export default App;