import profileImg from "../images/profile-img.jpeg";
import {FaInbox, FaLinkedin} from "react-icons/fa";

export default function Info() {
    return(
        <div className="profile font-link">
            <img className="profile--img" src={profileImg}/>
            <h2 className="profile--name">Deepak Kumar</h2>
            <h4 className="profile--designation">Software Developer, Mumbai</h4>
            <h6 className="profile--location">Mumbai, India</h6>
            <div className="sb">
                <button className="sb--email font-link"><FaInbox className="faicon"/> Email</button>
                <button className="sb--linkedin font-link"><FaLinkedin className="faicon"/> LinkedIn</button>
            </div>
        </div>
    )
}