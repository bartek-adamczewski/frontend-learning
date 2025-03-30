import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RocketsList from '*/RocketsList'; 
import RocketDetailsPage from '*/RocketDetails'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/rockets" />} />
        <Route path="/rockets" element={<RocketsList />} />
        <Route path="/rockets/:rocketName" element={<RocketDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
     
