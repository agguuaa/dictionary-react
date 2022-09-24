import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";
import Logo from "./Logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={Logo}
            className="App-logo img-fluid max-width=300px"
            alt="logo"
          />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Aga</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
