const football_player = ["ronaldo", "messi", "ramos", "neymer", "vini"]
// console.log(football_player);

const cricket_player = ["virat", "rohit", "dhoni", "hardik", "subhmen"]

// const printarr = football_player.concat(cricket_player)
// console.log(printarr);

const printarr = [...football_player, ...cricket_player]
// console.log(printarr);



const numarr = [1, 2, 3, 4, 8, [12, 31, 22, 4, 53, [9, 6, 75, 77]]]
const print_num_arr = numarr.flat(Infinity)
console.log(print_num_arr)

console.log(Array.from("messi"));
console.log(Array.isArray("hithesh sir "))

let num1 = 1990
let num2 = 1900
let num3 = 1880

console.log(Array.of(num1,num2,num3));

