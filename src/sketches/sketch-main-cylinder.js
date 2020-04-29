import React, { Component } from "react";
import Sketch from "react-p5";

let teste1;
let teste2;

export default class SketchCylinder extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.frameRate(120);
  };

  draw = p5 => {
    p5.background(0);

    teste1 = p5.frameCount;
    teste2 = p5.frameCount;

    p5.push();
    p5.normalMaterial();
    // translate(0, 0, 130);
    p5.rotateX(teste1 * 0.01);
    p5.rotateY(teste2 * 0.01);
    // rotateZ(frameCount * 0.01);
    p5.cylinder(20, 300);
    p5.pop();
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
  }
}