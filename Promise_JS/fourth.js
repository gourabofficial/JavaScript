function asyncfun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("succes...");
        }, 4000)
    });
};
function asyncfun2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("succes...");
        }, 4000)
    });
};
function asyncfun3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3");
            resolve("succes...");
        }, 4000)
    });
};

//promise chaning..
console.log("data1 feching...");

asyncfun1().then((res) => {
    console.log(res);

    console.log("data2 feching...");

    asyncfun2().then((res) => {
        console.log(res);

        console.log("data3 feching...");

        asyncfun3().then((res) => {
            console.log(res);

        });

    });

})
