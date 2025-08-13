// practice from : https://medium.com/@francesco.saviano87/mastering-javascript-arrays-10-progressive-exercises-b88e23d1b787
// Exercise 1: Array Reversal
// Problem: Learn how to reverse the order of elements in an array.

let arr = [1, 2, 3, 4, 5];

function reverse_order(arr) {
    const new_arr = [];
    let lated_index = arr.length - 1;
    while (lated_index >= 0) {
        new_arr[new_arr.length] = arr[lated_index];
        lated_index -= 1;
    }
    return new_arr;
}

console.log(reverse_order(arr));

// Exercise 2: Sum of Elements
// Problem: Calculate the sum of elements in an array.
function sum_arr(arr) {
    let sum = 0;
    for (item of arr) {
        sum = sum + item;
    }
    return sum;
}
console.log(sum_arr(arr));

// Exercise 7: Removing Duplicates
// Problem: Remove duplicate elements from an array.
arr = [1, 2, 2, 3, 4, 4, 5];

function in_array(item, arr) {
    const new_arr = [];
    for(a of arr) {
        if (item === a) new_arr[new_arr.length] = item;
    }
    return new_arr;
}

function remove_duplicate(arr) {
    let lated_index = arr.length;
    while (lated_index >= 0) {

        if(in_array(arr[lated_index], arr).length !== 1) {
            arr.splice(lated_index, 1); 
        }

        lated_index -= 1;
    }
    return arr;
}

console.log(remove_duplicate(arr));