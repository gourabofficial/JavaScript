let stranger = document.querySelector("h4")
let button = document.querySelector("button")

let check = 0;

button.addEventListener("click", function () {
    if (check == 0) {
        stranger.innerHTML = "Friend"
        stranger.style.color = "blue"
        button.innerHTML = "Unfriend"
        check = 1
    } else {
        stranger.innerHTML = "Stranger"
        stranger.style.color = "red"
        button.innerHTML = "Add Friend"
        check = 0;
    }
})
