import Logo from "../Images/InfoLearn-logos_transparent.png";
import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import "../Styles/Main.css";

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
                <a href="/#">Home</a>
                <a href="/#">Attendance</a>
                <a href="/#">Courseware</a>
                <a href="/#">Exam</a>
                <a href="/#">Result</a>
                <a href="/#">Performance Analysis</a>
                <a href="/#">Profile</a>
                <a href="/#">Assignments</a>
                <a href="/#">Logout</a>
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
