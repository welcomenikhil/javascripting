/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newName: function (newName) {
    this.name = newName;
  },
  newVolume: function (newVolume) {
    this.volume = newVolume;
  },
  newColor: function (newColor) {
    this.color = newColor;
  },
  newPocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};

console.log("Left before: ", backpack.strapLength.left);
backpack.newStrapLength(10, 15);
console.log("Left after: ", backpack.strapLength.left);

console.log("Name before: ", backpack.name);
backpack.newName("Weekend backpack");
console.log("Name after: ", backpack.name);

console.log("Volume before: ", backpack.volume);
backpack.newVolume(40);
console.log("Volume after: ", backpack.volume);

console.log("Color before: ", backpack.color);
backpack.newColor("blue");
console.log("Color after: ", backpack.color);

console.log("pocketNum before: ", backpack.pocketNum);
backpack.newPocketNum(20);
console.log("pocketNum after: ", backpack.pocketNum);
