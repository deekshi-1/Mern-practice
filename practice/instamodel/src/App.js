import React from "react";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Body from "./Components/body/body"

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Body/>
        <Footer />
      </div>
    );
  }
}

export default App;
