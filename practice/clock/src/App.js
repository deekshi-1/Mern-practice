import React from "react";
import './App.css';
import Clock from "./Components/clock";

class App extends React.Component {
  state={
    toggle:true
  }
  toggleClock=()=>{
    this.setState({
      toggle:!this.state.toggle
    })
  }
  render(){
    return <div className="App">
        <button onClick={this.toggleClock}>{this.state.toggle?"Hide Clock":"Show Clock"}</button>
        {this.state.toggle?<Clock/>:""}
    </div>
  }
}
 

export default App;
