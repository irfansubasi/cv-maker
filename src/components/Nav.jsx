import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/Button.css";
import "../styles/layouts.css";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="brand">
                <FontAwesomeIcon icon={faFileLines} className="home-icon" />
                <span>CV Maker</span>
            </div>
            
            <Link className="btn" to="/editcv">Create CV</Link>
        </nav>
    );
}