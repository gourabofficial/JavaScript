const shopingCart = [
    {
        itemName: "java course",
        price: 1000
    },
    {
        itemName: "js course",
        price: 500
    },
    {
        itemName: "python course",
        price: 1000
    },
]
 
let payBil = shopingCart.reduce((acc, course) => acc + course.price, 0)
let chekItemn = shopingCart.reduce((acc, course) => acc + 1,0)
console.log(payBil);
console.log(chekItemn);
