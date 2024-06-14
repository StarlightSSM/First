// src/App.js
import React from 'react';
import ProfileCarousel from './profileCarousel';
import profiles from './profiles';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {profiles.map((profile) => (
        <ProfileCarousel key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default App;
