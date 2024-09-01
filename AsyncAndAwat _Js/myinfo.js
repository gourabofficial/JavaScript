async function getInfo() {
    try {
        const response = await fetch('https://api.github.com/users/gourabofficial')
    const data = await response.json();
    console.log(data);
    } catch (error) {
        console.log("E:" ,error);
        
    }
    
}
getInfo();