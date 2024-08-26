let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON);
console.log(mydate.toLocaleDateString())

let newdate = new Date()
console.log(newdate.getFullYear());
console.log(newdate.getMonth() + 1);
console.log(newdate.getTime() * 1000);

let MyCreatDate = new Date("2004, 2, 1")
console.log(MyCreatDate.toDateString());
console.log(MyCreatDate.toLocaleDateString());
