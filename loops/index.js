document.querySelector("button").addEventListener("click",function(){
    // input value
    let inputValue = document.querySelector("input").value;

    // first list item
    const liElement = document.createElement('li');
    liElement.innerText = inputValue;
    const ulElement = document.querySelector('ol');
    ulElement.appendChild(liElement);
    // firstListItem = document.querySelector("li").firstChild;
    // replace the text
    firstListItem.textContent = this.inputValue;
})