const container = document.getElementById("container");
const gridItem = document.querySelector(".grid-item");
var stop = false
function makeRows(rows, cols) {
  if (stop === true)   
  stop = true
  container.style.gridTemplateRows = `repeat(${rows}), auto)`;
  container.style.gridTemplateColumns = `repeat(${cols}, auto)`;
  for (c = 0; c < (rows * cols); c++) {
    let rainbow = false
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    if (rainbow === false){
      cell.addEventListener('mousedown' , e => {cell.style.backgroundColor = `#${randomColor}`})
    }else{
      cell.addEventListener('mousedown' , e => {cell.style.backgroundColor = `black`})
    }
    document.getElementById('clear').addEventListener('click' , e => {rainbow = false})

  };
};
