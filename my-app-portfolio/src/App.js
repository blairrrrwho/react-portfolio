import './App.css';
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> 
          <code>React Portfolio</code>
        </p>
        <br></br>
        <a
          className="App-link"
          href="https://github.com/blairrrrwho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>blair millet</code>
        </a>
      </header>
      <PortfolioContainer />
    </div>
  );
}

// function App() {
//   return (
//     <div className="my-app">
//       <PortfolioContainer />
//     </div>
//   );
// }
// const App = () => <PortfolioContainer />;

export default App;
