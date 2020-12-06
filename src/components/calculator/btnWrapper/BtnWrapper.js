import React, {Component} from 'react';
import './BtnWrapper.css'

class BtnWrapper extends Component {
  render() {
    const {plus, minus, reset} = this.props
    return (
        <div className='btn-wrapper'>
          <button onClick={() => plus(1)} className='btn'>+ 1</button>
          <button onClick={() => minus(1)} className='btn'>- 1</button>
          <br/>
          <button onClick={() => plus(100)} className='btn'>+ 100</button>
          <button onClick={() => minus(100)} className='btn'>- 100</button>
          <br/>
          <button onClick={() => reset()} className='btn'>Reset</button>
        </div>
    );
  }
}

export default BtnWrapper;