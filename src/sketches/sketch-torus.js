import React, { Component } from "react";
import Sketch from "react-p5";

let rotX;
let rotY;
let rotZ;

export default class SketchTorus extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    p5.frameRate(10);
  };

  draw = p5 => {
    p5.background(0);

    rotX = p5.frameCount;
    rotY = p5.frameCount;
    rotZ = p5.frameCount;

    p5.push();
    p5.normalMaterial();
    p5.translate(0, 0, 130);
    p5.rotateX(rotX * 0.1);
    p5.rotateY(rotY * 0.1);
    p5.rotateZ(rotZ * 0.1);
    p5.torus(100, 100);
    p5.pop();
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
  }
}

// var sliderRadius;
// var sliderTubeRadius;
// var sliderRotateX;
// var sliderRotateY;
// var sliderRotateZ;
// var sliderRate;

// function setup() {
//   var canvas = createCanvas(windowWidth, windowHeight, WEBGL);
//   canvas.parent('myContainer');
//   background(0);

//   // frame rate
//   sliderRate = createSlider(1, 200, 0, 1);
//   sliderRate.parent('myInputs');
//   sliderRate.class('inputs');

//   let textRate = createP('Frame Rate');
//   textRate.parent('myInputs');

//   // radius
//   sliderRadius = createSlider(0, 1000, 0, 0.0001);
//   sliderRadius.parent('myInputs');
//   sliderRadius.class('inputs');

//   let textRadius = createP('Radius');
//   textRadius.parent('myInputs');

//   // tube radius
//   sliderTubeRadius = createSlider(0.01, 100, 0.01, 0.01);
//   sliderTubeRadius.parent('myInputs');
//   sliderTubeRadius.class('inputs');

//   let textTubeRadius = createP('Tube Radius');
//   textTubeRadius.parent('myInputs');

//   // rotate x
//   sliderRotateX = createSlider(0.01, 1, 0.01, 0.001);
//   sliderRotateX.parent('myInputs');
//   sliderRotateX .class('inputs');

//   let textRotateX  = createP('Rotate X');
//   textRotateX.parent('myInputs');

//   // rotate y
//   sliderRotateY = createSlider(0.01, 1, 0.01, 0.001);
//   sliderRotateY.parent('myInputs');
//   sliderRotateY .class('inputs');

//   let textRotateY = createP('Rotate Y');
//   textRotateY.parent('myInputs');

//   // rotate z
//   sliderRotateZ = createSlider(0.01, 1, 0.01, 0.001);
//   sliderRotateZ.parent('myInputs');
//   sliderRotateZ.class('inputs');

//   let textRotateZ = createP('Rotate Z');
//   textRotateZ.parent('myInputs');
//   saveButton = createButton('save image');
//   saveButton.mousePressed(saveImg);
//   saveButton.parent('but');
// }

// function saveImg() {
//   save('TORUS.png');
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   var frameR = sliderRate.value();
//   frameRate(frameR);
//   var radius = sliderRadius.value();
//   var tubeRadius = sliderTubeRadius.value();
//   var rotX = sliderRotateX .value();
//   var rotY = sliderRotateY .value();
//   var rotZ = sliderRotateZ.value();

//   normalMaterial();
//     translate(0, 0, 500);
//     push();
//     rotateX(frameCount * rotX);
//     rotateY(frameCount * rotY);
//     rotateZ(frameCount * rotZ);
//     torus(radius, tubeRadius);
//     pop();

//     if (mouseIsPressed) {
//       background(0);
//     }
// }