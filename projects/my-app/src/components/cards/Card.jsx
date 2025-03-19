import React from "react";
import "./card.scss";
import img from "../../assets/banner/2.jpeg";

function Card() {
  return (
    <div className="card-wrapper p-3 mb-10">
      <img src={img} alt="card image" />
      <div className="details py-5">
        <div className="sub-heading text-center uppercase">item name</div>
        <div className="description text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores esse veniam maxime numquam ad sunt asperiores quae, nulla aut culpa necessitatibus voluptates rem unde dicta.</div>
      </div>
    </div>
  );
}

export default Card;
