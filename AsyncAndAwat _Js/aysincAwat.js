async function getData(dataId) {
    return new Promise((resolve, reject) => {
        console.log('Data: ', dataId);
        setTimeout(() => {
            resolve('success');
        }, 3000); 
    });
}


//aysinc await
 
async function fetchData() {
    console.log("Fetching data...");
    await getData(1);
    console.log("Fetching data...");
    await getData(2);
    console.log("Fetching data...");
    await getData(3);
    console.log("Fetching data...");
    await getData(4);
}

fetchData();