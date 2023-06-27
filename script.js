const container = document.getElementById("container");
const gridItem = document.querySelector(".grid-item");
let randomColor = Math.floor(Math.random()*16777215).toString(16);
let stop = false

function makeRows(rows, cols) {
  if (stop === true)   
  stop = true
  container.style.gridTemplateRows = `repeat(${rows}), auto)`;
  container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover' , e => {cell.style.backgroundColor = `#${randomColor}`})
    document.getElementById('clear').addEventListener('click' , e => {cell.style.backgroundColor = 'white'})

  };
};
console.log(randomColor)