import React, { Component } from 'react';
import img10 from '../img/wedding-img10.jpg';
import '../App.css';

class Main3Component extends Component {
  render() {
    return (
      <div className='main main3'>
        <div className='img'>
          <img src={img10} alt=''/>
        </div>
      </div>
    );
  }
}

export default Main3Component;