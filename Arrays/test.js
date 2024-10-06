const arr = [0, 1, 3, 0, 26, 99, 77, 88, 8, 10, 1, 1, 2, 1, 0, 0, 1, 0];
arr.sort();
console.log(arr);

const target_element = 26;
binary_search(arr, target_element);



function binary_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = (right - left / 2);
    
    while (left <= right) {
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;

}

