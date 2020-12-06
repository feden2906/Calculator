import React, {Component} from 'react';
import './InputWrapper.css'

class InputWrapper extends Component {
  render() {
    const {addYourNum} = this.props
    return (
        <div className='input-wrapper'>
          <p><b>Число:</b></p>
          <input className='input'/>
          <button onClick={addYourNum} className='btn'>Submit</button>
        </div>
    );
  }
}

export default InputWrapper;