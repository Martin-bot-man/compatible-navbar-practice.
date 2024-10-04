const catResults = document.getElementById("cat_results")
const dogresults = document.getElementById("dog_results")
const catBtn =document.getElementById("cat_btn")
const dogBtn = document.getElementById("dog_btn")

catBtn.addEventListener("click", getRandomCat);
// dogBtn.addEventListener("click",getRandomDog);

function getRandomCat(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        // catResults.innerHTML ="<img src=`${data.file}`/>"
        catResults.innerHTML = "<img src=`${data.file}` />";

        
    })
}