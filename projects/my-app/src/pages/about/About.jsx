import React from "react";
import img from "../../assets/banner/3.jpeg";

function About() {
  return (
    <div className="container">
      <div className="page-heading mb-5">About</div>
      <div className="description text-center ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        et.
      </div>
      <img src={img} alt="aboutImg" className="mx-auto my-20" />
      <div className="description px-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis
        quos aliquid eaque, pariatur excepturi? Quaerat, minima laboriosam.
        Soluta natus qui earum ipsam quae. Laborum ea aliquid debitis, eos iure
        explicabo sit ullam deserunt placeat, quae quisquam nulla doloribus
        perferendis!
      </div>

      <div className="heading mt-20">Heading</div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        natus, eaque iure quam corporis reprehenderit nulla distinctio
        reiciendis delectus aut esse ullam? Nemo eligendi voluptas fugiat
        delectus, amet cupiditate deserunt perspiciatis culpa nihil animi
        laborum at repudiandae ullam inventore odit similique consequatur sed
        tempora ex dolorum blanditiis nesciunt? Alias eligendi quam sit est id.
        Odio officiis, eveniet magnam impedit et in molestiae ducimus illum
        numquam tempora omnis cumque reprehenderit iusto, earum quaerat
        accusantium assumenda ex totam fugiat debitis perferendis aliquid! Ea,
        dolorem hic sapiente officiis necessitatibus sunt sequi modi. Hic dolor,
        reiciendis laborum excepturi iste eos totam delectus id voluptates
        doloremque sit voluptatum voluptas, nam voluptate ratione perferendis
        magni asperiores iusto, maiores quas laudantium numquam aliquid dolorum
        dolorem. Assumenda accusantium laudantium voluptatum obcaecati
        necessitatibus autem impedit libero fuga, temporibus minus labore. Quas
        sunt doloribus debitis quaerat, id et nesciunt illo?
      </div>
    </div>
  );
}

export default About;
