import React from "react";
import {
  Link
} from "react-router-dom";
import SketchTorus from '../sketches/sketch-main-torus';
import SketchBox from '../sketches/sketch-main-box';
import SketchCone from '../sketches/sketch-main-cone';
import SketchCylinder from '../sketches/sketch-main-cylinder';
import SketchEllipsoid from '../sketches/sketch-main-ellipsoid';
import '../App.css'

function Home() {
  return (
    <>
    <main>
      <section className="home">
        <div className="container">
          <h1>3D Primitives</h1>
          <h5>soon</h5>
        </div>
      </section>
      <Link to="/box">
          <section className="canvas-sketch box">
            <SketchBox />
          </section>
      </Link>
      <Link to="/cone">
          <section className="canvas-sketch">
            <SketchCone />
          </section>
      </Link>
      <Link to="/cylinder">
          <section className="canvas-sketch">
            <SketchCylinder />
          </section>
      </Link>
      <Link to="/ellipsoid">
          <section className="canvas-sketch">
            <SketchEllipsoid />
          </section>
      </Link>
      <Link to="/torus">
          <section className="canvas-sketch">
            <SketchTorus />
          </section>
      </Link>
    </main>
    <footer>
      <p>satanic & satanist, inc</p>
    </footer>
  </>
  );
}

export default Home;
