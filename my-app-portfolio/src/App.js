import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <p> 
          <code>React Portfolio</code>
        </p>
        <br></br>
        <a
          className="App-link"
          href="https://github.com/blairrrrwho"
          target="_blank" rel="noopener noreferrer"
        >
          <code>blair millet</code>
        </a>
      </header> */}
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
