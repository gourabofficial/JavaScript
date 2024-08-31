const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am a promise");
         resolve("succes...")
        // reject("error!")
    })
};

let promise = getPromise();
promise.then((res) => {
    console.log("promose fulfild..",res)
});

promise.catch((rej) => {
    console.log("promise rejected..",rej);

});

// function getData(dataId, getNextData) {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             console.log('Data:' ,dataId);
//             resolve("succes....")
//             if(getNextData) {
//                 getNextData();
//             }
//         },4000)
//     })
// }