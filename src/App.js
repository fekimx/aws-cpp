import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Exam from './Exam';
import Lessons from './Lessons';
import Quiz from './Quiz'

import './App.css'; // Import your main CSS file


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Header />
          <div className="container flex-fill">
            <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/exam" element={<Exam/>} />
              {/* <Route path="/lessons2" element={<Lessons2/>} /> */}
              <Route path="/lessons" element={<Lessons/>} />
              <Route path="/quiz" element={<Quiz/>} />
            </Routes>
          </div>
        <Footer />
      </Router>
    </div>
  )
};

export default App; //specify the main component in the file
