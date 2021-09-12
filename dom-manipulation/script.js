// Identify specific elements you want to target
// Use the console (script.js file) to find those target elements.
// Target specific elements nested inside other elements.
// Try advanced CSS queries to get specific targets.
// Experiement with querySelector and querySelectorAll

let mainHeader = document.body.querySelector("h1");
mainHeader.style.background = "blue";

let backpackFeatures = document.body.querySelector(".backpack__features");
backpackFeatures.style.color = "red";

document.querySelector("main li:first-child").style.color = "green";
