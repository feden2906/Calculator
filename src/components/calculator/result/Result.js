import React, {Component} from 'react';
import './Result.css'

class Result extends Component {
  render() {
    const {result} = this.props
    return (
        <div className='result'>{result}</div>
    );
  }
}

export default Result;