const arr = [0, 1, 3, 0, 1, 1, 2, 1, 0, 0, 1, 0];
let count = 0;

    
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        count++;
    }

}
console.log(count);
