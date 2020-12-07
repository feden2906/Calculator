import React, {Component} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";


class Calculator extends Component {

  state = {result: 0};
  arrNums = [1, -1, 100, -100];

  plus_minus = (num) => {
    const {result} = this.state
    const value = result + num
    value > 0
        ? this.setState({result: value})
        : this.setState({result: 0})
  }
  reset = () => this.setState({result: 0})
  addYourNum = (e) => {
    const {result} = this.state
    let userNum = parseFloat(e.target.previousSibling.value)
    e.target.previousSibling.value = ''
    if (!isNaN(userNum)) {
      const value = result + userNum
      value > 0
          ? this.setState({result: value})
          : this.setState({result: 0})
    }
  }

  render() {
    const {result} = this.state
    return (
        <div className='calc-wrapper'>
          <Title/>
          <Result result={result}/>
          <BtnWrapper plus_minus={this.plus_minus} reset={this.reset} arrNums={this.arrNums}/>
          <InputWrapper addYourNum={this.addYourNum}/>
        </div>
    );
  }
}

export default Calculator;