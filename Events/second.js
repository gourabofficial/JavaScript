let btn = document.querySelector("#btn");
let mybody = document.querySelector("body");
let h1 = document.querySelector("h1");


let mode = "light";
btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        mybody.style.backgroundColor = "black"
        h1.style.color = "white";
    } else {
        mode = "light";
        mybody.style.backgroundColor = "white"
        h1.style.color = "black";
    }
    console.log(mode);

})