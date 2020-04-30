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
            <h5>
              The term geometric primitive, or prim, in computer graphics and
              CAD systems is used in various senses, with the common meaning of
              the simplest (i.e. 'atomic' or irreducible) geometric objects that
              the system can handle (draw, store). Sometimes the subroutines that
              draw the corresponding objects are called "geometric primitives" as well.
              The most "primitive" primitives are point and straight line segment, which
              were all that early vector graphics systems had.
            </h5>
            <br />
            <h5>
              In constructive solid geometry, primitives are simple geometric
              shapes such as a cube, cylinder, sphere, cone, pyramid, torus.
            </h5>
            <br />
            <h5>
              Modern 2D computer graphics systems may operate with primitives
              which are lines (segments of straight lines, circles and more
              complicated curves), as well as shapes (boxes, arbitrary polygons, circles).
            </h5>
            <br />
            <h5>
              A common set of two-dimensional primitives includes lines, points,
              and polygons, although some people prefer to consider triangles primitives,
              because every polygon can be constructed from triangles. All other graphic
              elements are built up from these primitives. In three dimensions, triangles
              or polygons positioned in three-dimensional space can be used as primitives
              to model more complex 3D forms. In some cases, curves (such as Bézier curves,
              circles, etc.) may be considered primitives; in other cases, curves are complex
              forms created from many straight, primitive shapes.
            </h5>
            <br />
            <h5>
              ...
            </h5>
            <br/>
            <h5>
              <a href="https://en.wikipedia.org/wiki/Geometric_primitive">WikiPedia</a>
            </h5>
          </div>
        </section>
        <Link to="/box">
          <section className="canvas-sketch">
            <SketchBox />
            <div className="canvas-text-box">
              <p>box</p>
            </div>
          </section>
        </Link>
        <Link to="/cone">
          <section className="canvas-sketch">
            <SketchCone />
            <div className="canvas-text-cone">
              <p>cone</p>
            </div>
          </section>
        </Link>
        <Link to="/cylinder">
          <section className="canvas-sketch">
            <SketchCylinder />
            <div className="canvas-text-cylinder">
              <p>cylinder</p>
            </div>
          </section>
        </Link>
        <Link to="/ellipsoid">
          <section className="canvas-sketch">
            <SketchEllipsoid />
            <div className="canvas-text-ellipsoid">
              <p>ellipsoid</p>
            </div>
          </section>
        </Link>
        <Link to="/torus">
          <section className="canvas-sketch">
            <SketchTorus />
            <div className="canvas-text-torus">
              <p>torus</p>
            </div>
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
