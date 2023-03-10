import Logo from "../Images/InfoLearn-logos_transparent.png";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Navbar.css";
import { Button } from "reactstrap";

export default function Navbar() {
    const navRef = useRef();
    

    const showNavBar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    }
    return (
        <header>
            <img src={Logo} alt="infoway logo"/>
            <nav ref={navRef}>
                <a href="/home">Home</a>
                <a href="/attendance">Attendance</a>
                <a href="/assignments">Assignments</a>
                <a href="/courseware">Courseware</a>
                <a href="/exams">Exam</a>
                <a href="/results">Result</a>
                <a href="/performance-analysis">Performance Analysis</a>
                <a href="/profile">Profile</a>
                <Button color="danger" outline>Logout</Button> 
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
    )
}
