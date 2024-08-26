

 mysymbol = Symbol(" valid or invalid ")
const user = {
    name: "gourab",
    age: 19,
    study: "Btech in cse",
    [mysymbol] : "valid persion"
}

// console.log(user.name)
// console.log(user.age)
// console.log(user.study)

console.log(user["name"])
console.log(user["age"])
console.log(user["study"])
console.log(typeof user[mysymbol])

user.name = "sourav"
console.log(user)
Object.freeze(user)

user.name = "Budhadev koner"
console.log(user)

