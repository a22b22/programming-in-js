// 01) Spot the errors and fix them

console.log("Task 1");
const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

/*
02) oddEven function
Implement a oddEven function.

 The function has one parameter which is a number
 If the number is an even number, the function returns the string even
 If the number is an od number, the function returns the string odd
// TODO: Implement the oddEven function
*/

console.log("Task 2");

function oddEven(number) {
  let result;
  if (number % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

/*
03) oldYoung function
Implement a oldYoung function.

 The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter
// TODO: Implement the oldYoung function
*/

console.log("Task 3");

function oldYoung(age) {
  let result;
  if (typeof age === "number") {
    if (age < 0) {
      result = "invalid parameter";
    } else if (age < 16) {
      result = "children";
    } else if (age < 50) {
      result = "young person";
    } else {
      result = "elder person";
    }
  } else {
    result = "invalid parameter";
  }
  return result;
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
