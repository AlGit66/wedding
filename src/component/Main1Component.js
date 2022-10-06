import React, { Component } from 'react';
import img8 from '../img/wedding-img8.jpg';
import '../App.css';

class Main1Component extends Component {
  render() {
    return (
      <div className='main main1'>
        <div className='img'>
          <img src={img8} alt=''/>
        </div>
      </div>
    );
  }
}

export default Main1Component;