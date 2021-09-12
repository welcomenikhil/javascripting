/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import LunchBox from "./Lunchbox.js";

/*
Create a Lunch Box object
*/

const weekendLunchBox = new LunchBox("Yum", "nike", "blue", "small", false);

console.log("weekendLunchBox object: ", weekendLunchBox);
console.log("brand value: ", weekendLunchBox.brand);
