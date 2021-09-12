/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class LunchBox {
  constructor(
    // Defines parameters:
    name,
    brand,
    color,
    size,
    velcroOpen
  ) {
    // Define properties:
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.velcroOpen = velcroOpen;
  }
  // Add methods like normal functions:
  pullVelcro(velcroStatus) {
    this.velcroOpen = velcroStatus;
  }
  newName(newName) {
    this.name = newName;
  }
  newColor(newColor) {
    this.color = newColor;
  }
  newSize(newSize) {
    this.sizeNum = newSize;
  }
}

export default LunchBox;
