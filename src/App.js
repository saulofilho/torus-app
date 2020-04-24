import React from "react";
import SketchTorus from './sketches/sketch'
import './App.css';

function App() {
  return (
    <>
      <header>
        torus experiment react
      </header>
      <main>
        <section className="hero">
          <p className="container">
            hero
          </p>
        </section>
        <section className="canvas-sketch">
          <SketchTorus />
        </section>
      </main>
      <footer>
        this is the footer
      </footer>
    </>
  );
}

export default App;