
var c = 3000;
let a = 100;

if (true) {
    let a = 10;
    let b = 20;
    var c = 30;
    console.log(a); // inner : a = 10
}


console.log(c); // global : c = 30,  not 3000
console.log(a);  // a = 100 