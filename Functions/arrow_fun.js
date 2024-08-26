
//normal function in js :

function Add(num1, num2) {
    return num1 + num2;
}

console.log(Add(8, 2))


//arrow function in js :


const AddTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(AddTwo(2, 5))

// 1 line : 
const Addtwo = (num1, num2) => num1 + num2;
console.log(Addtwo(8, 2));

// 1 line using ()
const Addthree = (num1, num2, num3) => (num1 + num2 + num3);
console.log(Addthree(3, 3, 3));

const printName = () => console.log("Gourab Ganguly")
printName()

// using object 

const user = {
    username: "Gourab",
    age: 20,
    study: "betch in cse "
}

const printobj = () => ({ username: user.username })
console.log(printobj().username)


//print object derect: always use ({username: "gourab"})

const userfun = () => ({ username: "Gourab Ganguly" })
console.log(userfun())