
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Data:', dataId);
            resolve("succes....")

        }, 4000)
    })
}

//promise chain

getData(1).then((res) => {
    console.log(res);
    getData(2).then((res) => {
        console.log(res);
        getData(3).then((res) => {
            console.log(res)
        })
    });
});