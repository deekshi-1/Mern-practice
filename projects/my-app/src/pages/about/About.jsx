import React from "react";
import img from "../../assets/banner/3.jpeg"


function About() {
  return (
    <div className="container">
      <div className="page-heading mb-5">About</div>
      <div className="description text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, et.</div>
      <img src={img} alt="" />
    </div>
  );
}

export default About;
