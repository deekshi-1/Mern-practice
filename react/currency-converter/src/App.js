import React, { Component } from "react";
import CurrencyInput from "./currencyInput";
import openRates from  "./services/openRates"

class App extends Component {
  state = {
    from: "USD",
    to: "INR",
    rate: 13,
    fromAmt: 1,
    toAmt: 1,
  };

  setAmount =(amt,field)=>{
    if(field === "from"){
      this.setState({
        fromAmt:amt,
        toAmt:null
      })
    }else {
      this.setState({
        fromAmt:null,
        toAmt:amt
      });
    }

  };
componentDidMount=()=>{
  this.fetchRates(this.state.from,this.state.to)
}
  // componentDidUpdate=(prevProps,prevState)=>{
  //   if(prevState.from !== this.state.from || prevState.to !== this.stat.to){
  //     this.fetchRates(this.state.from,this.state.to)
  //   }
  // }
  fetchRates= async(base="USD",symbol="CAD")=>{
    const rate = await openRates(base,symbol);
    console.log(rate);
    
  };
  computeResult=key=>{
    let{fromAmt,toAmt} = this.state;
    if(fromAmt != null){
      toAmt = parseFloat(fromAmt*this.state.rate).toFixed(2);
    }else{
      fromAmt = parseFloat(toAmt*this.state.rate).toFixed(2);
    }

    return key === "from"?fromAmt:toAmt;
  }

  render() {
    return (
      <div className="currency-converter">
        <CurrencyInput
          symbol={this.state.from}
          selectSymbol={(sym) =>
            this.setState({
              from: sym,
            })
          }
          setAmount={ amt=>this.setAmount(amt,"from")}
          amount = {this.computeResult("from")}
        />
        <CurrencyInput
          symbol={this.state.to}
          selectSymbol={(sym) =>
            this.setState({
              to: sym,
            })
          }
          setAmount={ amt=>this.setAmount(amt,"to")}
            amount = {this.computeResult("to")}
        />
      </div>
    );
  }
}

export default App;
