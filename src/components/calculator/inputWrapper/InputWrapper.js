import React, {Component} from 'react';
import './InputWrapper.css'

class InputWrapper extends Component {
  render() {
    const {addYourNum, addNauToState} = this.props
    return (
        <div className='input-wrapper'>
          <p><b>Число:</b></p>
          <input className='input' onChange={e => addNauToState(e.target.value)}/>
          <button onClick={addYourNum} className='btn'>Submit</button>
        </div>
    );
  }
}

export default InputWrapper;