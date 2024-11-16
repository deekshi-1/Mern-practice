import React from "react";

class Clock  extends React.Component {
    constructor(props){
        super(props)
        this.state={
            date:new Date()
        }
    }
    
    componentDidMount(){
        this.timerId=setInterval(this.tick,1000)
    }   

    tick=()=>{
        this.setState({
            date:new Date()
        })
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    render(){
        console.log(this.state.date.toLocaleTimeString());
        return <div className="clockCircle">
            <div className="time">
                <div className="text">Time Clock</div>
                <div className="value">{this.state.date.toLocaleTimeString()}</div>
            </div>
        </div>
    }
}

export default Clock;