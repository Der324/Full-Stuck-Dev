/*Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function called booWho that receives one argument.
If the argument received is a boolean primitive, the function should return true.
If the argument is any other value, the function should return false.*/

function booWho(value){
  return typeof value === "boolean";
}