import React,{Component} from "react";

class Toggle extends Component{
    state={
        toggle:true
    }
    switchToOn=()=>{
        this.setState(
            {toggle:true}
        )
    }
    switchToOff=()=>{
        this.setState(
            {toggle:false}
        )
    }
render(){
    return(
        <div>
            <h3>{this.state.toggle?"ON":"OFF"}</h3>
            <button onClick={this.switchToOn}>ON</button><button onClick={this.switchToOff}>OFF</button>
        </div>
    )
}
}

export default Toggle;