import React from 'react';
import './App.css';

import Navigation from './component/Navigation';
import Overlap from './component/Overlap';

const App = () => {
  return (
    <div className="screen">
      <Navigation/>
      <Overlap/>
    </div>
  );
};

export default App;
