import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    const date = new Date();

    let year = date.getFullYear();

    return(
        <footer className="footer">
            <div className="brand">
                <FontAwesomeIcon icon={faFileLines} className="home-icon" />
                <span>CV Maker</span>
            </div>
            <div className="socials">
                <a href="#"><FontAwesomeIcon icon={faSquareFacebook}/></a>
                <a href="#"><FontAwesomeIcon icon={faDiscord}/></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter}/></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            <p>©{year} <a href="https://github.com/irfansubasi">irfansubasi</a>. All rights reserved.</p>
        </footer>
    );
}