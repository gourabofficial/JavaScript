function getData(dataId , NextData) {
    setTimeout(() => {
        console.log("data :", dataId);
        if (NextData) {
            NextData()
        }
    },2000)
}
getData(9, () => {
    getData(10, () => {
        getData(11, () => {
            getData(12, () => {
                getData(13, () => {
               
                });
            });
        });
        
    });
});