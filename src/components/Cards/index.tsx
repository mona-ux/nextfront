import React from "react";
import "./index.css";

const cards = [
  { id: 1, discount: "15% Off", name: "Greys Vage", days: "6 Days Remaining", image: "/images/sl.png" },
  { id: 2, discount: "10% Off", name: "Greys Vage", days: "6 Days Remaining", image: "/images/mc.png" },
  { id: 3, discount: "25% Off", name: "Greys Vage", days: "7 Days Remaining",  image: "/images/fr.png" },
  { id: 4, discount: "20% Off", name: "Greys Vage", days: "8 Days Remaining", image: "/images/sp.png" },
];

const Cards = () => {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="discount-badge">{card.discount}</div>
          <img src={card.image} alt={card.name} />
          <p className="card-name">{card.name}</p>
          <p className="days-remaining">{card.days}</p>
           
        </div>
      ))}
    </div>
  );
};

export default Cards;
