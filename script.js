let abody = document.querySelector("body")
let testdiv = document.querySelector(".testlist")
counter = 0
let theButtons = document.querySelectorAll(".inline")


function generateNumber(){
    counter+=1        
    const randomNmuber = counter
    const listItem = document.createElement("div");
    listItem.className = "inline";
    const textnode = document.createTextNode(randomNmuber)
    const rando = listItem.appendChild(textnode);
    document.querySelector(".container").appendChild(listItem);
}
for (let c = 0; c <= 64; c++){
generateNumber()
}

theButtons.forEach(button => (button.addEventListener("click" , e =>{
    console.log("hi")
})))
console.log(theButtons)



