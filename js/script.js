// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html


/**
* Do basic math.
*/
function doMathClicked() {
    // input
    const sideA = parseFloat(document.getElementById("side-a-entered").value)
    const sideB = parseFloat(document.getElementById("side-b-entered").value)
    const heightLength = parseFloat(document.getElementById("height-entered").value)
   
   
    // process
    const areaOfTrapezoid = (sideA + sideB) * heightLength / 2
    const perimeterOfTrapezoid = sideA + sideB + sideC + sideD
   
   
    // output
    document.getElementById("area").innerHTML =
      "<p>The area is: " + areaOfTrapezoid + " cm². </p>"
    document.getElementById("perimeter").innerHTML =
      "<p>The perimeter is: " + perimeterOfTrapezoid + " cm. </p>"
   }
   
   
   