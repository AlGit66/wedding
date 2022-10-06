import React, { Component } from 'react';
import img11 from '../img/wedding-img11.jpg';
import '../App.css';

class Main4Component extends Component {
  render() {
    return (
      <div className='main main4'>
        <div className='img'>
          <img src={img11} alt=''/>
        </div>
      </div>
    );
  }
}

export default Main4Component;