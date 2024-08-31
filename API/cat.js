let url = "https://cat-fact.herokuapp.com/facts";
let fact = document.querySelector("#fact");
let btn = document.querySelector("#btn");

const getFact = async () => {
    console.log("Fetching data...");
    let response = await fetch(url);
    console.log(response); // json format 
    let data = await response.json();
    fact.innerText = data[2].text;
   
}
btn.addEventListener("click", getFact);
