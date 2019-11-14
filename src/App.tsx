import './App.scss';
import React from 'react';

import { NASAImgs } from './components/nasa-imgs/nasa-imgs.component';

export const App = () => {
  return (
    <div className='App'>
      <h1>NASA Pictures of the day:</h1>
      <NASAImgs />
    </div>
  );
};
