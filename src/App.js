// import './App.css';
import React from 'react'
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './Component/Welcome';
import Home from './Component/Home'
import Attendance from './Component/Attendance'
import Courseware from './Component/Courseware'
import Exam from './Component/Exam'
import Result from './Component/Result'
import PerformanceAnalysis from './Component/PerformanceAnalysis'
import Profile from './Component/Profile'
import Assignments from './Component/Assignments'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/courseware" element={<Courseware />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/result" element={<Result />} />
          <Route path="/performance-analysis" element={<PerformanceAnalysis />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // return (
  //   <React.Fragment>
  //     <Navbar />
  //   </React.Fragment>
  // );
}
