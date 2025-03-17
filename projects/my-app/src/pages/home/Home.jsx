import React from "react";
import "./home.scss";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="page-wrapper">
        <div className="container md:flex">
          <div className="md:w-1/2 p-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolor
            quas impedit, voluptatibus natus, alias voluptatum ad repellat saepe
            aperiam itaque! Deserunt, commodi temporibus laudantium enim tempore
            quos minus consequatur tenetur pariatur, nobis eveniet
            necessitatibus vero ullam totam optio sapiente.
          </div>
          <div className="md:w-1/2 p-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nihil
            at maxime dignissimos earum. Assumenda modi laboriosam totam
            sapiente odit magni veniam.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
