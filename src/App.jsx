
import "./app.css";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import Card from "./components/Card.jsx";



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
var cards = [
    {
      image: "public/images/card1img.png",
      indicator: "SOLD OUT",
      rating: 5.0,
      quantity: 6,
      country: "USA",
      description: "Life lessons with Katie Zaferes",
      price: 136,
    },
    {
      image: "/images/card2img.png",
      indicator: "ONLINE",
      rating: 5.0,
      quantity: 30,
      country: "USA",
      description: "Learn wedding photography",
      price: 125,
    },
    {
      image: "/images/card3img.png",
      indicator: "SOLD OUT",
      rating: 4.8,
      quantity: 2,
      country: "USA",
      description: "Group Mountain Biking",
      price: 50,
    },
    {
        image: "/images/card1img.png",
        indicator: "SOLD OUT",
        rating: 5.0,
        quantity: 6,
        country: "USA",
        description: "Life lessons with Katie Zaferes",
        price: 136,
      },
      {
        image: "/images/card2img.png",
        indicator: "ONLINE",
        rating: 5.0,
        quantity: 30,
        country: "USA",
        description: "Learn wedding photography",
        price: 125,
      },
      {
        image: "/images/card3img.png",
        indicator: "SOLD OUT",
        rating: 4.8,
        quantity: 2,
        country: "USA",
        description: "Group Mountain Biking",
        price: 50,
      }
  ];
