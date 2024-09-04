const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Promise 5");
        resolve();
        // reject();
    }, 1000)

}).then(() => {
    // console.log("Promise 5 is resolved");
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



const promiseSeven = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "Rana Ganguly", age: 21, city: "Chhora" });
        } else {
            reject("Error: Something went wrong");
        }
    });
});

promiseSeven.then((user) => {
    console.log(user);
    console.log(user.username);
    
}).catch((error) => {
    console.log(error);
    
})