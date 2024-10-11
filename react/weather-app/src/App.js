import logo from './logo.svg';
import './App.css';
import React ,{Component, createRef} from 'react';
import Input from './component/Input';
import { useDebounce } from 'use-debounce';
import debounce from "loadash.debounce";
import SearchResults from './component/SearchResult';
import SetUnits from './component/SetUnits';
import WeatherReport from './component/WeatherReport';

class App extends Component{
      state={
      searchResult:[],
      error:false,
      isLoading:true,
      selectedLocationId:0,
      tempUnit:'C',
      weatherData:{}
    };

    searchRef=createRef()

    componentDidMount(){
      this.searchRef.current.focus();
      this.getWeather();
    }

    searchLocations = useDebounce(keyword =>{
      fetch(`http://api.weatherserver.com/weather/cities/${keyword}`)
      .then(res=>res.json)
      .then(({result})=>this.setState({searchResult:result,error:false}))
      .catch(()=>{
        this.setState({error:true})
      })
    },1500)

    getWeather = () =>{
      this.setState({
        SearchResult:[],
        isLoading:true,
        error:false
      });
      this.searchRef.current.value ="";
      fetch(`http://api.weatherserver.com/weather/cities/${this.state.selectedLocationId}/${this.state.tempUnit}`)
      .then(res => res.json())
      .then(results => this.setState({
        weatherData:results,
        isLoading:false
      }))
      .catch(()=> this.setState({
        error:true
      }))
    }

  rendur(){return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <Input label="LOCATION" onInput={e => this.state.searchLocations(e.target.value)} inputRef={this.searchRef}/>
      {this.state.searchResult.length > 0 && (
        <SearchResults 
        data={this.state.searchResult}
        selectLocation={cityId => this.setState({
          selectedLocationId:cityId
        })}/>
      )}
      <SetUnits
        value={this.state.tempUnit}
        onSet={e => this.setState({
          tempUnit:e=>target.value
        })}/>
    </div>
  );}
}

export default App;
