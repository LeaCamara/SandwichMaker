"use strict";

// This SandwichMaker IIFE AUGMENTS the original one
var SandwichMaker = (function(maker) {

// Private variable to store the different meat prices
// needs to match VALUES from options in index.html
  var condimentPrices = {
	"mayonnaise": 0.20,
	"dijon": 0.10,
	"honey": 0.15,
	"oil&vinegar": 0.50,
	"hotSauce": 0.25,
	"none": 0.00
  };

  // Augment the original object with another method
  maker.getCondimentPrice = function(selectedCondiment) {
	console.log("from inside selectedCondiment function - should be value of condiment you selected -->",selectedCondiment);
	var finalCondimentPrice = condimentPrices[selectedCondiment];
	SandwichMaker.addToppingPrice(finalCondimentPrice);
	console.log("finalCondimentPrice", finalCondimentPrice);
  }; 
  
  maker.subtractCondimentPrice = function(selectedCondiment) {
    console.log("console selectedCondiment from inside maker.subtractCondimentPrice?-->", selectedCondiment);
    var unselectedCondimentPrice = condimentPrices[selectedCondiment]; 
    SandwichMaker.subtractToppingPrice(unselectedCondimentPrice);
  };
  
  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker || {});