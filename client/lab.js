let button = document.querySelector("button")
let input = document.querySelector("input")

button.addEventListener("click", saveInput)

function saveInput(){
    alert(`I would like ${input.value}`)
}