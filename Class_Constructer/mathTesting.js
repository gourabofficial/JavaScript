const mathPI = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(mathPI)

// my own object creation

const myobj = {
    name: "Gourab",
    age: 21,
    email: "gourab@gmail.co.in"
}

const printMyObj = Object.getOwnPropertyDescriptor(myobj, "name")
console.log(printMyObj)


Object.defineProperty(myobj, "name", {
    writable: false,
    value: "Gourab Ganguly"
});

console.log(myobj.name);