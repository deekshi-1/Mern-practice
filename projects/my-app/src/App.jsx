import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        {/* <Home /> */}
        <About />
      </div>

      <Footer />
    </>
  );
}

export default App;
