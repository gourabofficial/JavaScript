function getData(dataId, getNextData) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('Data:' ,dataId);
            resolve("succes....")
            if(getNextData) {
                getNextData();
            }
        },4000)
    })
}