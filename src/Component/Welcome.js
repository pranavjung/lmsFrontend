import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
// import Home from './Home'
// import Attendance from './Attendance'
// import Courseware from './Courseware'
// import Exam from './Exam'
// import Result from './Result'
// import PerformanceAnalysis from './PerformanceAnalysis'
// import Profile from './Profile'
// import Assignments from './Assignments'

export default function Welcome() {
    return (
        <>
            <Navbar />
            <h1>Welcome!</h1>
            <>
                {/* <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/courseware" element={<Courseware />} />
                    <Route path="/exam" element={<Exam />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/performance-analysis" element={<PerformanceAnalysis />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/assignments" element={<Assignments />} />
                </Routes> */}
            </>
        </>
    )
}


