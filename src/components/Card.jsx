import "./main.css";
import star from "../assets/star.png";


export default function Card(props){
    // console.log(props.x.image);
    return (
        <div className="main card">

            <div className="card--bg">
              <img src={props.x.image} className="card--img" alt="card"/>
                {props.x.indicator && <p className="card--indicator">{props.x.indicator}</p>}
            </div>

            <div className="card--rankinglist card--inc">
               {props.x.rating && 
               <>
               <img src={star} className="card--star" />
                <span> {props.x.rating}</span>
                
                {props.x.quantity && <span className="card--pieces card--light">({props.x.quantity})</span>}
                <svg width="2" height="2" viewBox="0 0 2 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1" cy="1" r="1" fill="#918E9B" className="card--inc"/>
                </svg>
                </>
                }
                <span className="card--country card--light">{props.x.country}</span>
            </div>

            <p className="card--desciption card--inc">{props.x.description}</p>

            {props.x.price && <p><span className="card--dark card--inc">From ${props.x.price}</span> / person</p>}
        </div>
       
    );
}
