import React, { Component } from 'react';
import {Outlet, Link} from 'react-router-dom';
import '../App.css';

class NavComponent extends Component {
  render() {
    return (
      <div id='nav'>
        <nav>
          <div className='nav-box'>
            <ul>
              <li><Link to='/Main1Component'>Main1</Link></li>
              <li><Link to='/Main2Component'>Main2</Link></li>
              <li><Link to='/Main3Component'>Main3</Link></li>
              <li><Link to='/Main4Component'>Main4</Link></li>
              <li><Link to='/Main5Component'>Main5</Link></li>
              <li><Link to='/Main6Component'>Main6</Link></li>
            </ul>
          </div>
        </nav> 
        <Outlet /> {/* 컴포넌트 출력 */}
      </div>
    );
  }
}

export default NavComponent;