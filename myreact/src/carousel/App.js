import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCarousel from './profileCarousel';
import profiles from './profiles';
import ProfileDetail from './profileDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={profiles.map((profile) => (
              <ProfileCarousel key={profile.id} profile={profile} />
            ))}
          />
          <Route path="/profile/:id" element={<ProfileDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
