let url = "https://cat-fact.herokuapp.com/facts";

const getFact = async () => {
    console.log("Fetching data...");
    let response = await fetch(url);
    console.log(response);
}