let btn = document.querySelector("#btn");
let mybody = document.querySelector("body");
let h1 = document.querySelector("h1");


let mode = "light";
btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        mybody.style.backgroundColor = "black"
        h1.style.color = "red";
        btn.innerHTML = "Light mode"
    } else {
        mode = "light";
        mybody.style.backgroundColor = "white"
        h1.style.color = "black";
        btn.innerHTML = "Dark Mode"
    }
    console.log(mode);

})