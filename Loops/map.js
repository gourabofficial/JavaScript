const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

printnum = myarr.map((num) => num * 2)
// console.log(printnum);


const mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

printNum = mynumber.map((num) => num * 2) //1*2 = 2
    .map((num) => num + 1)                   //2+1 = 3
    .map((num) => num + 2)                   //3+2 = 5
    .filter( (num) => num >= 10)

console.log(printNum);
