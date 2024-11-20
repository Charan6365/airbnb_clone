import "./main.css";
import hero from "../assets/hero.png";

export default function Main(){
    return (
        <div className="main card--inc">
            <img src={hero} alt="Hero_photo" className="hero"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    );
}