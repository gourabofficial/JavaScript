function addTwoNumbers(num1, num2) {

    return num1 + num2
}
let sum = addTwoNumbers(5, 5)
console.log(sum)


function isLoggin(username) {

    if (username === "") {
        console.log("Enter a valid name");
        return
    }
    if (username === undefined) {
        console.log("Enter a name");
        return
    }

    return `${username} just loggin `
}

console.log(isLoggin("gourab"))



