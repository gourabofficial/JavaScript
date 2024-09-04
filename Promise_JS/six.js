const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 5");
        resolve();
        // reject();
    }, 1000)

}).then(() => {
    console.log("Promise 5 is resolved");
});


const promishSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                myname: "Gourab Ganguly",
                age: 21,
                city: "Dubrajpur"
            }
        )
    });
});

promishSix.then((user) => {
    console.log(user)
})