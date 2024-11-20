import "./footer.css";
import logo from "../assets/logo.png";

export default function Footer(){
    return (
        <div className="footer">
            <img src={logo} alt="airbnb_logo" width="100px" />
        </div>
    );
}