import Header from "./Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import Companies from "./components/Hero/Companies/companies";
import Residencies from "./components/Hero/Residencies/residencies";
import Value from "./components/value/value";
import Contact from "./components/Contact/contact";
import Getstarted from "./components/GetStarted/Getstarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
      <Header />
       <Hero />\
      </div>
     <Companies />
      <Residencies/>
      <Value/>
      <Contact/> 
      <Getstarted/>
      <Footer/>
    </div>
    
  );
}

export default App;
