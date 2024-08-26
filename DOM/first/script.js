const light = document.querySelector("h1")
const btnOn = document.querySelector(".on")
const btnOff = document.querySelector(".off")



let value = 0

btnOn.addEventListener("click", function () {
    if (value == 0) {
        light.style.backgroundColor = "yellow"
        console.log("light on")
        value = 1
    } else {
        light.style.backgroundColor = "transparent"
        console.log("light off")
        value = 0
    }
})
// btnOff.addEventListener("click", function () {
//     light.style.backgroundColor = "white"
//     console.log("light off")

// })

