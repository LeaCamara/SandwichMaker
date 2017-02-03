"use strict";

// Get references to the fieldsets that contain all the categories of options
var breads = document.getElementById("breadChoices");
// console.log("after var breads = document.getElementById('breadChoices' -->", breads);
var meats = document.getElementById("meatChoices");
var cheeses = document.getElementById("cheeseChoices");
var veggies = document.getElementById("veggieChoices");
var condiments = document.getElementById("condimentChoices");

// OPTION 1 (doesn't decrease price of de-selected items):
// breads.addEventListener("change", function(event) {
// Get the value chosen from the DOM
//   var selectedBread = event.target.value;
//   console.log("selectedBread should be -->", selectedBread);
//   SandwichMaker.getBreadPrice(selectedBread);
// });

// OPTION 2 (to increase AND decrease price via if statement:
breads.addEventListener("change", function(event) {
  var selectedBread = event.target.value;
  if (event.target.checked === true) {
      SandwichMaker.getBreadPrice(selectedBread);    
      console.log("hello from inside the TRUE part of the BREAD if statement")
  } else if (event.target.checked === false) {
      SandwichMaker.subtractBreadPrice(selectedBread);    
      console.log("hello from inside the FALSE part of the BREAD if statement")
      //SUBTRACT TOPPING PRICE
  }
});

meats.addEventListener("change", function(event) {
  var selectedMeat = event.target.value;
  if (event.target.checked === true) {
      SandwichMaker.getMeatPrice(selectedMeat);    
      console.log("hello from inside the TRUE part of the MEAT if statement")
  } else if (event.target.checked === false) {
      SandwichMaker.subtractMeatPrice(selectedMeat);    
      console.log("hello from inside the FALSE part of the MEAT if statement")
  }
});

cheeses.addEventListener("change", function(event) {
  var selectedCheese = event.target.value;
  if (event.target.checked === true) {
      SandwichMaker.getCheesePrice(selectedCheese);    
      console.log("hello from inside the TRUE part of the Cheese if statement")
  } else if (event.target.checked === false) {
      SandwichMaker.subtractCheesePrice(selectedCheese);    
      console.log("hello from inside the FALSE part of the Cheese if statement")
  }
});

veggies.addEventListener("change", function(event) {
  var selectedVeggie = event.target.value;
  if (event.target.checked === true) {
      SandwichMaker.getVeggiePrice(selectedVeggie);    
      console.log("hello from inside the TRUE part of the Veggie if statement")
  } else if (event.target.checked === false) {
      SandwichMaker.subtractVeggiePrice(selectedVeggie);    
      console.log("hello from inside the FALSE part of the Veggie if statement")
  }
});

condiments.addEventListener("change", function(event) {
  var selectedCondiment = event.target.value;
  SandwichMaker.getCondimentPrice(selectedCondiment);
});

var button = document.getElementById("makeSandwichButton").addEventListener("click", outputSandwichPrice);

function outputSandwichPrice(clickEvent) {
  console.log("from inside outputSandwichPrice function, is it running?");
  SandwichMaker.getTotalPrice();
}