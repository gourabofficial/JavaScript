const myarr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(myarr);
console.log(myarr[2]);
console.log(myarr.indexOf(8))

 myarr2 = new Array(12, 13 ,14, 15, 16, 17)
console.log(myarr2[1]);
myarr2.push(144) 
myarr2.pop()
myarr.unshift(100) // add atfirst index alwayes
myarr2.unshift(101) 
myarr2.unshift(102) 
// myarr2.shift()      // remove the first index value
console.log(myarr2);


 newarr = myarr2.join() //  join(): convart to a string 
console.log(newarr) 
console.log(typeof newarr) // its a string 

newarr = myarr2.slice(2, 5)
console.log(newarr);


newarray1 = myarr2.splice(2,5) 
console.log(newarray1);




