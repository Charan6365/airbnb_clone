
import "./app.css";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Card from "./components/Card.jsx";
import img1 from "../public/card1img.png";
import img2 from "../public/card2img.png";
import img3 from "../public/card3img.png";



export default function App(){

    return (
        <div className="container">
            <Footer />
            <Main />
            
        <div className="cards">
            {cards.map((x)=>{
                return <Card
                key={x.img}
                x={x}
                />;
            })}
            </div>
        </div>
    );
}

// img,indicator,rating,quantity,country,description,price
var cards=[
    {
        image:{img1},
        indicator:"SOLD OUT",
        rating:5.0,
        quantity:6,
        country:"USA",
        description:"Life lessons with Katie Zaferes",
        price:136
    },
    {
        image:{img2},
        indicator:"ONLINE",
        rating:5.0,
        quantity:30,
        country:"USA",
        description:"Learn wedding photography",
        price:125
    }
    ,
    {
        image:{img3},
        indicator:"SOLD OUT",
        rating:4.8,
        quantity:2,
        country:"USA",
        description:"Group Mountain Biking",
        price:50
    }
    ,
    {
        image:{img1},
        indicator:"SOLD OUT",
        rating:5.0,
        quantity:6,
        country:"USA",
        description:"Life lessons with Katie Zaferes",
        price:136
    },
    {
        image:{img2},
        indicator:"ONLINE",
        rating:5.0,
        quantity:30,
        country:"USA",
        description:"Learn wedding photography",
        price:125
    }
    ,
    {
        image:{img3},
        indicator:"SOLD OUT",
        rating:4.8,
        quantity:2,
        country:"USA",
        description:"Group Mountain Biking",
        price:50
    }
]
