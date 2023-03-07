import React from 'react';
import Login from './Component/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ComponentHolder from './Component/ComponentHolder';
import Home from './Component/Home';
import Attendance from './Component/Attendance';
import Courseware from './Component/Courseware';
import Exams from './Component/Exams';
import Results from './Component/Results';
import PerformanceAnalysis from './Component/PerformanceAnalysis';
import Profile from './Component/Profile';
import Assignments from './Component/Assignments';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/courseware" element={<Courseware />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/results" element={<Results />} />
          <Route path="/performance-analysis" element={<PerformanceAnalysis />} />
          <Route path="/profile"
            element={
              <Profile
              emailID = {"123@gmail.com"}
              password = {"12345"}
              name = {"Pranav"}
              designation = {"Student"}
              contactNo = {"1234567890"}
              address = {"Pune"}
              dob = {"25-05-1998"}
              gender = {"Male"}
              bloodGroup = {"A+"}
              ccatRollNo = {"-"}
              studentPrn = {"220943120042"}
              />
            }
          />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  // return (
  //   <React.Fragment>
  //     <Navbar />
  //   </React.Fragment>
  // );
}
