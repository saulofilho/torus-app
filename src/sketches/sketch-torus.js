import React, { Component } from "react";
import Sketch from "react-p5";

let sliderRadius;
let sliderTubeRadius;
let sliderRotateX;
let sliderRotateY;
let sliderRotateZ;
let sliderRate;

export default class SketchTorus extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.background(0);
  
    // frame rate
    let textRate = p5.createP('Frame Rate');
    textRate.parent('myInputs');
    sliderRate = p5.createSlider(1, 200, 10, 1);
    sliderRate.parent('myInputs');
    sliderRate.class('inputs');
  
    // radius
    let textRadius = p5.createP('Radius');
    textRadius.parent('myInputs');
    sliderRadius = p5.createSlider(0, 1000, 100, 0.0001);
    sliderRadius.parent('myInputs');
    sliderRadius.class('inputs');
  
    // tube radius
    let textTubeRadius = p5.createP('Tube Radius');
    textTubeRadius.parent('myInputs');
    sliderTubeRadius = p5.createSlider(0.01, 100, 1, 0.01);
    sliderTubeRadius.parent('myInputs');
    sliderTubeRadius.class('inputs');
  
    // rotate x
    let textRotateX  = p5.createP('Rotate X');
    textRotateX.parent('myInputs');
    sliderRotateX = p5.createSlider(0.01, 1, 0.1, 0.001);
    sliderRotateX.parent('myInputs');
    sliderRotateX.class('inputs');
  
    // rotate y
    let textRotateY = p5.createP('Rotate Y');
    textRotateY.parent('myInputs');
    sliderRotateY = p5.createSlider(0.01, 1, 0.1, 0.001);
    sliderRotateY.parent('myInputs');
    sliderRotateY.class('inputs');
  
    // rotate z
    let textRotateZ = p5.createP('Rotate Z');
    textRotateZ.parent('myInputs');
    sliderRotateZ = p5.createSlider(0.01, 1, 0.1, 0.001);
    sliderRotateZ.parent('myInputs');
    sliderRotateZ.class('inputs');

    function saveImg() {
      p5.save('TORUS.png');
    }

    let saveButton = p5.createButton('save image');
    saveButton.parent('but');
    saveButton.mousePressed(saveImg);
  };


  draw = p5 => {
    let frameR = sliderRate.value();
    p5.frameRate(frameR);
    let radius = sliderRadius.value();
    let tubeRadius = sliderTubeRadius.value();
    let rotX = sliderRotateX.value();
    let rotY = sliderRotateY.value();
    let rotZ = sliderRotateZ.value();
  
    p5.normalMaterial();
    p5.translate(0, 0, 500);
    p5.push();
    p5.rotateX(p5.frameCount * rotX);
    p5.rotateY(p5.frameCount * rotY);
    p5.rotateZ(p5.frameCount * rotZ);
    p5.torus(radius, tubeRadius);
    p5.pop();
  
      if (p5.mouseIsPressed) {
        p5.background(0);
      }
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
  }
}

