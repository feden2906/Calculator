import React, {Component} from 'react';
import './BtnWrapper.css'

class BtnWrapper extends Component {
  render() {
    const {plus_minus, reset, arrNums} = this.props

    return (
        <div className='btn-wrapper'>
          {arrNums.map(value => <button onClick={() => plus_minus(value)} className='btn'>{value}</button>)}
          <button onClick={() => reset()} className='btn'>Reset</button>
        </div>
    );
  }
}

export default BtnWrapper;