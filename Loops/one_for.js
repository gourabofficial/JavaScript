for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);

}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 1; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}
for (let i = 1; i <= 20; i++) {
    for (let j = 1; j <= 20; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


let i = 20;
for (let j = 1; j <= 20; j++) {
    // console.log(`${i} * ${j} = ${i * j}`);
}


//array print using for loop 

let myarray = ["gourab", "budda", "debesh", "rahul", "sougata", "sohel"];
// console.log(myarray.length);

for (let i = 0; i < myarray.length; i++) {

    // console.log(myarray[i]);
}

//break and continue

for (let i = 1; i <= 10; i++){
    if (i == 5) {
        // console.log("5 mil giya..");
        continue;
    }
    // console.log(i);
}

for (let i = 1; i <= 10; i++){
    if (i == 5) {
        console.log("5 mil giya..");
        break;
    }
    console.log(i);
}