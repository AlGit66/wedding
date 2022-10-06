import React, { Component } from 'react';
import img9 from '../img/wedding-img9.jpg';
import '../App.css';

class Main2Component extends Component {
  render() {
    return (
      <div className='main main2'>
        <div className='img'>
          <img src={img9} alt=''/>
        </div>
      </div>
    );
  }
}

export default Main2Component;