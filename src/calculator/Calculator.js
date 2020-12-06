import React, {Component} from 'react';
import './Calculator.css'


class Calculator extends Component {

  state = {result: 0}

  plus = () => {
    const {result} = this.state
    const value = result + 1
    this.setState({result: value})
  }

  minus = () => {
    const {result} = this.state
    const value = result - 1
    if (value > 0) {
      this.setState({result: value})
    } else {
      this.setState({result: 0})
    }
  }

  minus100 = () => {
    const {result} = this.state
    const value = result - 100
    if (value > 0) {
      this.setState({result: value})
    } else {
      this.setState({result: 0})
    }
  }

  plus100 = () => {
    const {result} = this.state
    const value = result + 100
    this.setState({result: value})
  }

  reset = () => this.setState({result: 0})

  addYourNum = (e) => {
    const {result} = this.state
    let userNum = parseInt(e.target.previousSibling.value)

    if (!isNaN(userNum)) {
      const value = result + userNum
      this.setState({result: value})
    }
  }

  render() {
    const {result} = this.state
    return (
        <div className='calc-wrapper'>
          <h1 className='center'><b>Calculator</b></h1>

          <div className='result'>{result}</div>

          <div className='btn-wrapper'>
            <button onClick={this.plus} className='btn'>+ 1</button>
            <button onClick={this.minus} className='btn'>- 1</button>
            <br/>
            <button onClick={this.plus100} className='btn'>+ 100</button>
            <button onClick={this.minus100} className='btn'>- 100</button>
            <br/>
            <button onClick={this.reset} className='btn'>Reset</button>
          </div>
          <div className='input-wrapper'>
            <p><b>Число:</b></p>
            <input className='input'/>
            <button onClick={this.addYourNum} className='btn'>Submit</button>
          </div>
        </div>
    );
  }
}

export default Calculator;