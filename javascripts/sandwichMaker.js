"use strict";

// THIS IS THE PRIMARY/ORIGINAL IIFE:

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Instructions: "Return the public interface that other code can interact with"
  // This is adding the selected topping price to the total price and then displaying that in the console:
  return {
    addToppingPrice: function(toppingPrice) {
      console.log("toppingPrice", toppingPrice.toFixed(2))
      totalPrice += toppingPrice;
      console.log("totalPrice should be -->", totalPrice.toFixed(2));
    },
    subtractToppingPrice: function(toppingPrice) {
      totalPrice -= toppingPrice;
      console.log("from inside the subtractTopping function, total price should decrease -->", totalPrice.toFixed(2));
      //showing as NaN *******
    },
      // finalMeatPrice from meat.js becomes toppingPrice (var toppingPrice = finalMeatPrice)
      // anything you pass in here now becomes toppingPrice (reusable code; makes your code DRY)
      // **** If you wanted to skip the button & just tally it directly in the DOM, you wouldn't need the getTotalPrice function below (or the button event listener or the outputSandwichPrice function in the DOM handler). Just this next line of code would do the trick:
      // document.getElementById("sandwichPrice").innerHTML = `$${(totalPrice.toFixed(2))}`;
    getTotalPrice: function() {
      // document.getElementById("sandwichPrice").innerHTML = `Your sandwich cost is: $ ${(totalPrice.toFixed(2))}`;
      document.getElementById("sandwichPrice").innerHTML = `$${(totalPrice.toFixed(2))}`;
    }
  };
}());

// GROUP CODE:
// var sandwichMaker = (function(){
//   var totalPrice = 0;
//    return {
//     addTopping: function(toppingPrice) {
//       totalPrice += toppingPrice;
//       console.log("Your price: " + totalPrice);
//     },
//     subtractTopping: function(toppingPrice) {
//       totalPrice -= toppingPrice;
//       console.log("Your price: " + totalPrice);
//     },
//     finalPrice: function() {
//       var end = totalPrice;
//       return end;
//     }

// };

// })(sandwichMaker || {});
