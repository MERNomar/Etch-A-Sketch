const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.gridTemplateRows = `repeat(${rows}), auto)`;
  container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(32, 32);
