import Logo from "../Images/InfowayLogo.jpeg";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Navbar() {
    return (
        <header>
            <img src={Logo} alt="infoway logo"/>
            <nav>
                <a href="/#">Home</a>
                <a href="/#">Attendence</a>
                <a href="/#">Courseware</a>
                <a href="/#">Exam</a>
                <a href="/#">Result</a>
                <a href="/#">Performance Analysis</a>
                <a href="/#">Profile</a>
                <a href="/#">Assignments</a>
                <a href="/#">Logout</a>
                <button>
                    <FaTimes />
                </button>
            </nav>
            <button>
                <FaBars />
            </button>
        </header>
    )
}
