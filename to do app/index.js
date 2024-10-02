 let greetings = document.getElementById("greeting")
 greetings.textContent ="HelLo, DOM"
 let clicked = document.getElementById("clickButton");
    
 clicked.addEventListener("click",function(){
    clicked.innerText= "clicked";
 })
