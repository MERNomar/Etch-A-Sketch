let abody = document.querySelector("body")
let testdiv = document.querySelector(".testlist")
counter = 0
let theButtons = document.querySelectorAll(".inline")



function generateNumber(){
    
    for (let c = 0; c <= 65; c++){
    if (counter === 66) { listItem.style.backgroundColor = "white"}
    counter+=1        
    const randomNmuber = counter
    const listItem = document.createElement("div");
    listItem.addEventListener("mouseover" , e => {
        listItem.style.backgroundColor ="black";
    })
    listItem.className = "inline";
    document.querySelector(".container").appendChild(listItem);
    console.log(listItem)

}
    
}














