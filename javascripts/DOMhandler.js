"use strict";

// Get references to the fieldsets that contain all the categories of options
var breads = document.getElementById("breadChoices");
// console.log("after var breads = document.getElementById('breadChoices' -->", breads);
var meats = document.getElementById("meatChoices");
var cheeses = document.getElementById("cheeseChoices");
var veggies = document.getElementById("veggieChoices");
var condiments = document.getElementById("condimentChoices");

/* 
  <select> elements & checkboxes broadcast a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
// OPTION 1:
// breads.addEventListener("change", function(event) {
// Get the value chosen from the DOM
//   var selectedBread = event.target.value;
//   console.log("selectedBread should be -->", selectedBread);
//   SandwichMaker.getBreadPrice(selectedBread);
// });
// OPTION 2:
breads.addEventListener("change", function(event) {
  var selectedBread = event.target.value;
  if (event.target.checked === true) {
      SandwichMaker.getBreadPrice(selectedBread);    
      console.log("hello from inside the TRUE part of the if statement")
  } else if (event.target.checked === false) {
      SandwichMaker.subtractBreadPrice(selectedBread);    
      console.log("hello from inside the FALSE part of the if statement")
      //SUBTRACT TOPPING
  }
});

// GROUP CODE:
      // bread.addEventListener("change", function(event) {
      //     chosenToppings = event.target.id;
      //   if (event.target.checked === true) {
      //     chosenToppingPrice = sandwichMaker.getBreadCost(chosenToppings);
      //     sandwichMaker.addTopping(chosenToppingPrice);
      //   } else if (event.target.checked === false) {
      //     chosenToppingPrice = sandwichMaker.getBreadCost(chosenToppings);
      //      sandwichMaker.subtractTopping(chosenToppingPrice);

      //   }
      //     endPrice.innerHTML = sandwichMaker.finalPrice();
      // });

meats.addEventListener("change", function(event) {
  var selectedMeat = event.target.value;
  SandwichMaker.getMeatPrice(selectedMeat);
});

cheeses.addEventListener("change", function(event) {
  var selectedCheese = event.target.value;
  SandwichMaker.getCheesePrice(selectedCheese);
});

veggies.addEventListener("change", function(event) {
  var selectedVeggie = event.target.value;
  SandwichMaker.getVeggiePrice(selectedVeggie);
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