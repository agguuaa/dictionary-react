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
        <footer>
          This project was coded by Aga and is{" "}
          <a
            href="https://github.com/agguuaa/dictionary-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/elaborate-jalebi-07c736/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
