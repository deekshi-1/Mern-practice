import React from "react";
import "./home.scss";
import img from "../../assets/banner/1.jpeg";
import "animate.css";
import Card from "../../components/cards/Card";

const Home = () => {
  return (
    <>
      <div className="container lg:flex m-auto gap-10">
        <div className=" lg:w-1/2 p-2 flex flex-col justify-center">
          <div className="heading">
            Your Project,
            <br />
            Delevered On Time
          </div>
          <div className="sub-heading">SybHeading</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolor
            quas impedit, voluptatibus natus, alias voluptatum ad repellat saepe
            aperiam itaque! Deserunt, commodi temporibus laudantium enim tempore
            quos minus consequatur tenetur pariatur, nobis eveniet
            necessitatibus vero ullam totam optio sapiente.
          </div>
        </div>
        <div className="lg:w-1/2 p-2 flex justify-center items-center">
          <img src={img} alt="" className="w-100% animate-pulse" />
        </div>
      </div>
      <div className="py-10 w-100%">
        <div className="heading text-center">Our Works</div>
        <div className="description text-center md:px-29">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
          expedita reiciendis excepturi beatae mollitia perspiciatis officiis
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-10 lg:px-10  w-100%">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="py-10">
        <div className="heading text-center text-red-800">Carousel</div>
        <div className="sub-heading text-center md:px-29">Lorem ipsum dolo</div>
        <div className="flex gap-10 overflow-x-scroll">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Home;
