"use strict";

// This SandwichMaker IIFE AUGMENTS the original one
var SandwichMaker = (function(maker) {
  // console.log(SandwichMaker);
// Private variable to store the different meat prices
// needs to match VALUES from options in index.html
  var meatPrices = {
		"turkey": 2.00,
		"roast-beef": 2.10,
		"ham": 2.20,
		"mushroom": 2.30,
		"tofu": 2.40,
		"none": 0.00
	};

  // Augment the original object with another method
  maker.getMeatPrice = function(selectedMeat) {
  	console.log("from inside selectedMeat function - should be value of meat you selected -->", selectedMeat);
    var finalMeatPrice = meatPrices[selectedMeat];
    console.log("finalMeatPrice", finalMeatPrice);
    SandwichMaker.addToppingPrice(finalMeatPrice);    
    // object.method(parameter);
  };
  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
