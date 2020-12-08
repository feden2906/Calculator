import React, {Component} from 'react';
import './Calculator.css'
import Title from "./title/Title";
import Result from "./result/Result";
import BtnWrapper from "./btnWrapper/BtnWrapper";
import InputWrapper from "./inputWrapper/InputWrapper";


class Calculator extends Component {

  state = {result: 0, inputValue: ''};
  arrNums = [1, -1, 100, -100];

  plus_minus = (num) => {
    const {result} = this.state
    const value = result + num
    value > 0
        ? this.setState({result: value})
        : this.setState({result: 0})
  }
  reset = () => this.setState({result: 0})

  addYourNum = () => {
    const {result, inputValue} = this.state
    const nam = +inputValue
    if (!isNaN(nam)) {
      const value = result + nam
      value > 0
          ? this.setState({result: value})
          : this.setState({result: 0})
    }
    this.setState({inputValue: ''})
  }
  addNauToState = (value) => {
    this.setState({inputValue: value})
  }

  render() {
    const {result} = this.state
    return (
        <div className='calc-wrapper'>
          <Title/>
          <Result result={result}/>
          <BtnWrapper plus_minus={this.plus_minus} reset={this.reset} arrNums={this.arrNums}/>
          <InputWrapper addYourNum={this.addYourNum} addNauToState={this.addNauToState}/>
        </div>
    );
  }
}

export default Calculator;