"use strict";

// This SandwichMaker IIFE AUGMENTS the original one
var SandwichMaker = (function(maker) {
	// console.log(SandwichMaker);
// Private variable to store the different bread prices
// needs to match VALUES from options in index.html
	var breadPrices = {
		"white": 1.00,
		"wheat": 1.10,
		"baguette": 1.20,
		"hoagie": 1.30,
		"bagel": 1.40,
		"croissant": 1.50,
		"none": 0.00
	};

	// Augment the original object with another method
	maker.getBreadPrice = function(selectedBread) {
		console.log("from inside selectedBread function - should be value of bread you selected -->",selectedBread)
		console.log("from inside bread.js maker.getBreadPrice, maker returns:", maker);
// returns the entire object including all augmented IIFEs because it's all connected so it's all available as soon as the JS loads
		var finalBreadPrice = breadPrices[selectedBread];
		console.log("finalBreadPrice", finalBreadPrice);
    	SandwichMaker.addToppingPrice(finalBreadPrice);
	}
  // Return the new, augmented object with the new method on it
  	return maker;
})(SandwichMaker || {});