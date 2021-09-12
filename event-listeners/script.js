// Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
// Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
// Add an event listener to each grid cell to change its background color when it is clicked.
// Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.

const grid = document.querySelector(".grid");

grid.addEventListener("mouseenter", () => {
  grid.style.outline = "solid blue";
});

grid.addEventListener("mouseleave", () => {
  grid.style.outline = "";
});

/**
 * Function to generate random hex color
 */
const randomColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "solid blue";
  });

  // Remove outline when cell is exited
  cell.addEventListener("mouseleave", () => {
    cell.style.outline = "";
  });

  // Set/remove random background color on click
  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor) {
      cell.style.backgroundColor = "";
    } else {
      cell.style.backgroundColor = `#${randomColor()}`;
    }
  });
});

/**
 * Set page background using the "d" key on the keyboard
 */
const body = document.body;
body.addEventListener("keydown", (event) => {
  // event.code holds the current key pressed:
  console.log(event.code);

  // Test for KeyD (the "d" key)
  if (event.code === "KeyA") {
    body.style.backgroundColor === ""
      ? (body.style.backgroundColor = "green")
      : (body.style.backgroundColor = "");
  }
});
