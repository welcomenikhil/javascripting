// Create a basic function declaration
// Make a change to an element in the DOM (querySelector, adding a class, and so on)
// Call the function declaration
document.body.onload = createElement;

function createElement() {
  const newPara = document.createElement("p");
  const textNode = document.createTextNode("Hello, my name is Nikhil!");
  newPara.appendChild(textNode);

  const newElement = document.getElementById("parent");
  document.body.insertBefore(newPara, newElement);
  document.body.querySelector("p").style.color = "blue";
  newPara.classList.add("my-class");
}

// basic function expression
let add = function (num1, num2) {
  return num2 + num2;
};

let result = add(12, 12);

alert(result);
