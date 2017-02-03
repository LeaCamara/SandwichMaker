"use strict";

// This SandwichMaker IIFE AUGMENTS the original one
var SandwichMaker = (function(maker) {

// Private variable to store the different meat prices
// needs to match VALUES from options in index.html
  var veggiePrices = {
		"lettuce": 0.50,
		"tomato": 0.50,
		"pickle": 0.25,
		"onion": 0.50,
		"avocado": 0.95,
		"basil": 0.75,
		"none": 0.00
	};

  // Augment the original object with another method
  maker.getVeggiePrice = function(selectedVeggie) {
		console.log("from inside selectedVeggie function - should be value of veggie  you selected -->",selectedVeggie)
		console.log("from inside veggie.js maker.getVeggiePrice, maker returns:", maker);
		var finalVeggiePrice = veggiePrices[selectedVeggie];
		console.log("finalVeggiePrice", finalVeggiePrice);

    	SandwichMaker.addToppingPrice(finalVeggiePrice);
  	};

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});