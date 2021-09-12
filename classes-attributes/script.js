// Find an element and add two different classes
document.querySelector("h2").classList.add("class-name-one", "class-name-two");

// Remove only one of the new classes
document.querySelector("h2").classList.remove("class-name-one");

// Add a new attribute to an element
document.querySelector("img").setAttribute("alt", "A drawing of a backpack");

// Request the value of the attribute
document.querySelector("img").getAttribute("alt");

// Change the value of the attribute
document.querySelector("img").setAttribute("title", "This shouldn't be here");
