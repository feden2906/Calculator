import React, {Component} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";


class Calculator extends Component {

  state = {result: 0}

  plus = (num) => {
    const {result} = this.state
    const value = result + num
    this.setState({result: value})
  }
  minus = (num) => {
    const {result} = this.state
    const value = result - num
    value > 0
        ? this.setState({result: value})
        : this.setState({result: 0})
  }
  reset = () => this.setState({result: 0})
  addYourNum = (e) => {
    const {result} = this.state
    let userNum = parseFloat(e.target.previousSibling.value)
    if (!isNaN(userNum)) {
      this.setState({result: (result + userNum)})
    }
  }

  render() {
    const {result} = this.state
    return (
        <div className='calc-wrapper'>
          <Title/>
          <Result result={result}/>
          <BtnWrapper plus={this.plus} minus={this.minus} reset={this.reset}/>




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