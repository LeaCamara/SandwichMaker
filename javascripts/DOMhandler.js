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
breads.addEventListener("change", function(event) {
// Get the value chosen from the DOM
  var selectedBread = event.target.value;
  console.log("selectedBread should be -->", selectedBread);
  SandwichMaker.getBreadPrice(selectedBread);
});
  // Determine the price of the topping chosen

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