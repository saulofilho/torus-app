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
let textDetailY;
let textDetailYy;
let textDetailX;
let textDetailXx;
let textRotateZ;
let textRotateZz;
let textRotateY;
let textRotateYy;
let textRotateX;
let textRotateXx;
let textSizeX;
let textSizeX2;
let textRate;
let textRate2;
let textSizeY;
let textSizeY2;

export default class SketchCone extends Component {

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef);
    // p5.background(0);
  
    // frame rate
    textRate2 = p5.createP('Frame Rate:');
    textRate = p5.createP('');
    textRate2.parent('inputsVariables');
    textRate.parent('inputsVariables');
    textRate2.class('text-input');
    textRate.class('text-input number');
    sliderRate = p5.createSlider(1, 200, p5.random(1, 200), 1);
    sliderRate.parent('inputsVariables');
    sliderRate.class('customInputs');
  
    // size x
    textSizeX2 = p5.createP('Side X:');
    textSizeX = p5.createP('');
    textSizeX2.parent('inputsVariables');
    textSizeX.parent('inputsVariables');
    textSizeX2.class('text-input');
    textSizeX.class('text-input number');
    sliderRadius = p5.createSlider(1, 200, p5.random(1, 200), 0.0001);
    sliderRadius.parent('inputsVariables');
    sliderRadius.class('customInputs');
  
    // size y
    textSizeY2 = p5.createP('Side Y:');
    textSizeY = p5.createP('');
    textSizeY2.parent('inputsVariables');
    textSizeY.parent('inputsVariables');
    textSizeY2.class('text-input');
    textSizeY.class('text-input number');
    sliderTubeRadius = p5.createSlider(1, 1000, p5.random(1, 1000), 0.01);
    sliderTubeRadius.parent('inputsVariables');
    sliderTubeRadius.class('customInputs');
  
    // rotate x
    textRotateXx = p5.createP('Rotate X:');
    textRotateX = p5.createP('');
    textRotateXx.parent('inputsVariables');
    textRotateX.parent('inputsVariables');
    textRotateXx.class('text-input');
    textRotateX.class('text-input number');
    sliderRotateX = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateX.parent('inputsVariables');
    sliderRotateX.class('customInputs');
  
    // rotate y
    textRotateYy = p5.createP('Rotate Y:');
    textRotateY = p5.createP('');
    textRotateYy.parent('inputsVariables');
    textRotateY.parent('inputsVariables');
    textRotateYy.class('text-input');
    textRotateY.class('text-input number');
    sliderRotateY = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateY.parent('inputsVariables');
    sliderRotateY.class('customInputs');
  
    // rotate z
    textRotateZz = p5.createP('Rotate Z:');
    textRotateZ = p5.createP('');
    textRotateZz.parent('inputsVariables');
    textRotateZ.parent('inputsVariables');
    textRotateZz.class('text-input');
    textRotateZ.class('text-input number');
    sliderRotateZ = p5.createSlider(0.01, 100, p5.random(0.01, 100), 0.001);
    sliderRotateZ.parent('inputsVariables');
    sliderRotateZ.class('customInputs');

    // detail x
    textDetailXx = p5.createP('Detail X:');
    textDetailX = p5.createP('');
    textDetailXx.parent('inputsVariables');
    textDetailX.parent('inputsVariables');
    textDetailXx.class('text-input');
    textDetailX.class('text-input number');
    sliderDetailX = p5.createSlider(3, 24, p5.random(3, 24));
    sliderDetailX.parent('inputsVariables');
    sliderDetailX.class('customInputs');

    // detail Y
    textDetailYy = p5.createP('Detail Y:');
    textDetailY = p5.createP('');
    textDetailYy.parent('inputsVariables');
    textDetailY.parent('inputsVariables');
    textDetailYy.class('text-input');
    textDetailY.class('text-input number');
    sliderDetailY = p5.createSlider(3, 16, p5.random(3, 16));
    sliderDetailY.parent('inputsVariables');
    sliderDetailY.class('customInputs');

    // button png
    function saveImg() {
      p5.save('TORUS.png');
    }

    let saveButton = p5.createButton('save png');
    saveButton.parent('btnSave');
    saveButton.mousePressed(saveImg);


    // button jpg
    function saveImgJPG() {
      p5.save('TORUS.jpg');
    }

    let saveButtonJPG = p5.createButton('save jpg');
    saveButtonJPG.parent('btnSave');
    saveButtonJPG.mousePressed(saveImgJPG);
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

    textDetailY.html(sliderDetailY.value());
    textDetailX.html(sliderDetailX.value());
    textRotateZ.html(sliderRotateZ.value());
    textRotateZ.html(sliderRotateZ.value());
    textRotateY.html(sliderRotateY.value());
    textRotateX.html(sliderRotateX.value());
    textSizeX.html(sliderRadius.value());
    textRate.html(sliderRate.value());
    textSizeY.html(sliderTubeRadius.value());
  
    p5.normalMaterial();
    p5.translate(0, 0, 500);
    p5.push();
    p5.rotateX(p5.frameCount * rotX);
    p5.rotateY(p5.frameCount * rotY);
    p5.rotateZ(p5.frameCount * rotZ);
    p5.rotateZ(p5.frameCount * rotZ);
    p5.cone(sizeX, sizeY, detailX, detailY);
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

