import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import StartQuiz from './StartQuiz';
import QuizDashboard from './QuizDashboard';
import QuizPage from './QuizPage';
import Profile from "./Profile";
import { useState } from 'react';
function App() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <Router>
      <div className='flex flex-col'>
        <Navbar />
          <div className='flex flex-row'>
          <div className=" ml-1 flex flex-col mt-12 fixed top-1 left-1 md:mt-24 md:top-0 md:left-0 ">
        <button
          className="md:w-10 md:h-10 rounded-full bg-cyan-800 w-6 h-6"
          onClick={() => {
            openProfile ? setOpenProfile(false) : setOpenProfile(true);
          }}
        ></button>
        {openProfile && <Profile />}
      </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/start-quiz" element={<StartQuiz/>} />
          <Route path="/quiz-dashboard" element={<QuizDashboard/>} />
          <Route path="/quiz-page" element={<QuizPage/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
