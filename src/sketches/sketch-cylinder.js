import React, { Component } from "react";
import Sketch from "react-p5";

let sliderRadius;
let sliderRate;
let sliderTubeRadius;
let sliderRotateX;
let sliderRotateY;
let sliderRotateZ;
let sliderDetailX;
let sliderDetailY;

export default class SketchCylinder extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    // p5.background(0);
  
    // frame rate
    let textRate = p5.createP('Frame Rate');
    textRate.parent('inputsVariables');
    sliderRate = p5.createSlider(1, 200, p5.random(1, 200), 1);
    sliderRate.parent('inputsVariables');
    sliderRate.class('customInputs');
  
    // sizeX
    let textRadius = p5.createP('Size X');
    textRadius.parent('inputsVariables');
    sliderRadius = p5.createSlider(1, 200, p5.random(1, 200), 0.0001);
    sliderRadius.parent('inputsVariables');
    sliderRadius.class('customInputs');
  
    // tube sizeY
    let textTubeRadius = p5.createP('Size Y');
    textTubeRadius.parent('inputsVariables');
    sliderTubeRadius = p5.createSlider(0.01, 1000, p5.random(0.01, 1000), 0.01);
    sliderTubeRadius.parent('inputsVariables');
    sliderTubeRadius.class('customInputs');
  
    // rotate x
    let textRotateX  = p5.createP('Rotate X');
    textRotateX.parent('inputsVariables');
    sliderRotateX = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateX.parent('inputsVariables');
    sliderRotateX.class('customInputs');
  
    // rotate y
    let textRotateY = p5.createP('Rotate Y');
    textRotateY.parent('inputsVariables');
    sliderRotateY = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateY.parent('inputsVariables');
    sliderRotateY.class('customInputs');
  
    // rotate z
    let textRotateZ = p5.createP('Rotate Z');
    textRotateZ.parent('inputsVariables');
    sliderRotateZ = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateZ.parent('inputsVariables');
    sliderRotateZ.class('customInputs');

    // detail x
    let textDetailX = p5.createP('Detail X');
    textDetailX.parent('inputsVariables');
    sliderDetailX = p5.createSlider(3, 24, p5.random(3, 24));
    sliderDetailX.parent('inputsVariables');
    sliderDetailX.class('customInputs');

    // detail Y
    let textDetailY = p5.createP('Detail Y');
    textDetailY.parent('inputsVariables');
    sliderDetailY = p5.createSlider(3, 16, p5.random(3, 16));
    sliderDetailY.parent('inputsVariables');
    sliderDetailY.class('customInputs');

    function saveImg() {
      p5.save('TORUS.png');
    }

    // button
    let saveButton = p5.createButton('save png');
    saveButton.parent('btnSave');
    saveButton.mousePressed(saveImg);
  };


  draw = p5 => {
    let frameR = sliderRate.value();
    p5.frameRate(frameR);
    let sizeX = sliderRadius.value();
    let sizeY = sliderTubeRadius.value();
    let rotX = sliderRotateX.value();
    let rotY = sliderRotateY.value();
    let rotZ = sliderRotateZ.value();
    let detailX = sliderDetailX.value();
    let detailY = sliderDetailY.value();
  
    p5.normalMaterial();
    p5.translate(0, 0, 500);
    p5.push();
    p5.rotateX(p5.frameCount * rotX);
    p5.rotateY(p5.frameCount * rotY);
    p5.rotateZ(p5.frameCount * rotZ);
    p5.rotateZ(p5.frameCount * rotZ);
    p5.cylinder(sizeX, sizeY, detailX, detailY);
    p5.pop();
  
      if (p5.mouseIsPressed) {
        p5.clear();
      }
  };

  windowResized = p5 => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} windowResized={this.windowResized} />;
  }
}

