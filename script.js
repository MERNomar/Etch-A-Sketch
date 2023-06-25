let abody = document.querySelector("body")
let testdiv = document.querySelector(".testlist")



function generateNumber(){
    const randomNmuber = Math.floor(Math.random() * 5)
    const listItem = document.createElement("div");
    listItem.className = "inline";
    const textnode = document.createTextNode(randomNmuber)
    const rando = listItem.appendChild(textnode);
    document.querySelector(".container").appendChild(listItem);


}



