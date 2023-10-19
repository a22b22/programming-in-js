//01) Greet function
/*
Implement a welcomeMsg function.

 The first parameter is the name of the person to be greeted. It's a string.
 The function should return a string that contains the name of person in a welcome msg.
 */

function welcomeMsg(firstname) {
  let returnValue = "Welcome " + firstname + "!";
  return returnValue;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

//02) Gross Price Function
/* Implement a calcGrossPrice function.

 The first parameter is the net price as integer number
 The second parameter is the tax rate as float number
 The function should return the gross price
 */
function calcGrossPrice(netPrice, taxRate) {
  let returnValue = netPrice * (taxRate + 1);
  return returnValue;
}
//TODO: fix

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

/*
03) Add Positive Function
Implement a addPositive function.

 The function has two parameters which will always be numbers
 The function should add the two numbers and return the result
 If any of the arguments is a negative number, it should be handled as a positive number (see example code)

 */

// TODO: Implement the addPositive function
function addPositive(a, b) {
  let returnValue;
  if (a < 0) {
    a = -a;
  }
  if (b < 0) {
    b = -b;
  }
  returnValue = a + b;
  return returnValue;
}

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
