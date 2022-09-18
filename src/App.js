import "./App.css";
import React from "react";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
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
