// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import FacultyPage from './pages/facultypage.js';
import LoginPage from './pages/LoginPage.js';
import StudentPage from './pages/Student.js';
import AdminPage from './pages/adminpage.js';
import './App.css';

function App() {
 

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/facultypage" element={<FacultyPage />} />
          <Route path="/studentpage" element={<StudentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
