import React, { Component } from 'react';
//리액트 라우터 돔 React Router Dom
// BrowserRouter
// Routes
// Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavComponent from './NavComponent';
import Main1Component from './Main1Component';
import Main2Component from './Main2Component';
import Main3Component from './Main3Component';
import Main4Component from './Main4Component';
import Main5Component from './Main5Component';
import Main6Component from './Main6Component';


class HomeComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavComponent/>}>
            <Route index element={<Main1Component/>}/>
            <Route path='Main1Component' element={<Main1Component/>}/>
            <Route path='Main2Component' element={<Main2Component/>}/>
            <Route path='Main3Component' element={<Main3Component/>}/>
            <Route path='Main4Component' element={<Main4Component/>}/>
            <Route path='Main5Component' element={<Main5Component/>}/>
            <Route path='Main6Component' element={<Main6Component/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default HomeComponent;