// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import Home from './Component/Home';
// import Login from './Component/Login';
import Navbar from './Component/Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  // return(
  //   <BrowserRouter>
  //     <Routes>
  //         <Route index element={<Login />} />
  //         <Route path="/home" element={<Home />} />
  //       </Routes>
  //   </BrowserRouter>
  // );
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  return (
    <React.Fragment>
      <Navbar />
    </React.Fragment>
  );
}
