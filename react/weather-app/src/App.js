import logo from './logo.svg';
import './App.css';
import React ,{Component, createRef} from 'react';
import Input from './component/Input';
import { useDebounce } from 'use-debounce';


function App() {
    state={
      searchResult:[],
      error:false,
      isLoading:true,
      selectedLocationId:1,
      tempUnit:'C',
      weatherData:{}
    };

    searchRef=createRef()
    searchLocation = useDebounce(keyword =>{
      fetch(`http://api.weatherserver.com/weather/cities/${keyword}`)
      .then(res=>res.json)
      .then(({result})=>this.setState({searchResult:result,error:false}))
      .catch(()=>{
        this.setState({error:true})
      })
    },1500)

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <Input label="LOCaTION" onInput={()=>{}} inputRef={this.searchRef}/>
    </div>
  );
}

export default App;
