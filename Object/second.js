const obj1 = { 1: "gourab", 2: "ronaldo", }
const obj2 = { 3: "cristano", 4: "messi" }

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)



const regularUser = {
    email: "gourabofficial702@gmail.com",
    islogin: true,
    study: "Btech in cse",
    fullName: {
        username: {
            firstname: "gourab",
            lastname: "ganguly",
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullName.username);


console.log(Object.keys(regularUser)) // some functions (keys)
console.log(Object.values(regularUser)) // showing the values 
console.log(regularUser.hasOwnProperty('study')) // exits or not (study)
console.log(regularUser.hasOwnProperty('hobby'))