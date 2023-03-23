let button = document.querySelector("button")
let input = document.querySelector("input").value

button.addEventListener("click", saveInput)

function saveInput(){
    alert(input)
}