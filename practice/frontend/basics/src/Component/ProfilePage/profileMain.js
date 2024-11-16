import React from "react";
import "./profileMain.css";
import Card from "./components/cards";
const profileMain = () => {
  const profileList = [
    {Id:1 ,imgUrl: "https://picsum.photos/100/100?random=1", name: "Swetha ", role: "Partner" },
    {Id:2 ,imgUrl: "https://picsum.photos/100/100?random=2", name: "Jhon Mcdoe ", role: "Sr Software Engineer" },
    {Id:3 ,imgUrl: "https://picsum.photos/100/100?random=3", name: "Arun", role: "HR manager" },
    {Id:4, imgUrl: "https://picsum.photos/100/100?random=6", name: "Gokul", role: "Tech" },
  ];

  return (
    <div className="main">
      <h2>Profile List</h2>
      <div className="list">
       <ul>
       {profileList.map(item => <Card key={item.Id} data ={item}/>)}
       </ul>
      </div>
    </div>
  );
};

export default profileMain;
