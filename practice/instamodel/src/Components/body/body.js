import React from "react";

class Body extends React.Component{
    componentDidMount(){
        this.getPosts();
    }

    getPosts = async () =>{
        const url = "https://pixabay.com/api/?key=46593457-a9eb3c3b51d991197fa270434&image_type=photo&pretty=true";
        const options ={
            method:"GET"
        } 
        const response =await fetch(url,options)
       if(response.ok){
        const data = await response.json();
        console.log(data.hits);
        
       }
        
    }
    render(){
        return(
            <div>
                <h1>KKKK</h1>
            </div>
        )
    }
} 

export default Body;