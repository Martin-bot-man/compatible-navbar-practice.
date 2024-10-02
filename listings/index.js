let hoverItem = document.querySelectorAll(".hover-item")
hoverItem.forEach(item => {item.addEventListener("mouseover",()=> {
    item.style.backgroundColor = "yellow";
})

item.addEventListener("mouseout",()=>{
    item.style.backgroundColor = "white"
})
});