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

promiseSeven
    .then((user) => {
        console.log(user);
        console.log(user.username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("all are working fine");
    })

// using aysnc await
async function Getinfo() {
    try {
        const response1 = await fetch('https://api.github.com/users/BuddhadebKoner');
        const response2 = await fetch('https://api.github.com/users/gourabofficial');
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log(data1);
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
}
Getinfo();

//using promise 
const promiseGetinfo = new Promise((resolve, reject) => {
    const url = fetch('https://api.github.com/users/BddhadebKoner')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                console.log(`Error: ${response.status}`)
            }
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(error);
            
        });
});

promiseGetinfo.then(data => {
    console.log(data);
}).catch(error=>{
    console.log(error)
})