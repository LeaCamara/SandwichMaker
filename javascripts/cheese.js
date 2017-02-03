"use strict";

// This SandwichMaker IIFE AUGMENTS the original one
var SandwichMaker = (function(maker) {
  // console.log(SandwichMaker);
// Private variable to store the different meat prices
// needs to match VALUES from options in index.html
  var cheesePrices = {
		"cheddar": 0.80,
		"swiss": 0.85,
		"brie": 0.90,
		"gruyere": 0.95,
		"none": 0.00
	};

  // Augment the original object with another method
  maker.getCheesePrice = function(selectedCheese) {
    console.log("from inside selectedCheese function - should be value of cheese you selected -->", selectedCheese);
    var finalCheesePrice = cheesePrices[selectedCheese];
    console.log("finalCheesePrice", finalCheesePrice);

    SandwichMaker.addToppingPrice(finalCheesePrice);    

  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});