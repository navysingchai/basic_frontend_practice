// create array with many data types (array literals)
let my_arr = ["hello world", 'V', 365, true];
const my_arr_length = my_arr.length;

// print array size
console.log(`total length ${my_arr_length}`);

// print the first item
console.log(`first : ${my_arr[0]}`);

// print the last item
console.log(`first : ${my_arr[my_arr_length - 1]}`);

// nested array & object
my_arr[my_arr_length] = [1, 3, 5, 7, 9];
my_arr[my_arr.length] = {id: 67130, name:'navy'};

console.log(my_arr);

console.log("----- print every items in the array -----");
// print every items in the array
i = 0;
while(i < my_arr.length) {
    console.log(my_arr[i]);
    ++i;
}
for (const element of my_arr) {
    console.log(element)
}

console.log("----- shrink array -----");
// shrink array
console.log(my_arr.length);
my_arr.pop()
console.log(my_arr.length);

console.log("----- create array with spred operator -----");
let my_name = "navy"
// spred operator (...) = แยกออกมาได้
const char_list = [...my_name]
console.log(char_list)
console.log(...char_list);

console.log("----- create array with constructor array -----");
const my_arr1 = new Array(); // empty
const my_arr2 = new Array(10); // request empty 10 channel
const my_arr3 = new Array(1, 3, 5, "i love you 3000");
console.log(my_arr1);
console.log(my_arr2);
console.log(my_arr3);

console.log("----- create array with Array.of() method -----");
// create array with item
const my_arr4 = Array.of(10);
console.log(my_arr4);

console.log("----- create array with Array.from() method -----");
// create array with array (copy)
const my_arr5 = Array.from(my_arr4);
console.log(my_arr5);


console.log("----- array destructuring -----");

const [a,b] = [5, 10];
console.log(a);

const [m] = [1, 3, 5, 7, 9];
console.log(m);

const [, , n] = [1, 3, 5, 7, 9]
console.log(n);

const [x, y, ...z] = [10, 20, 30, 40, 60, 70, 80, 90, 100, 200, 300]
const [, , v, ...p] = [10, 20, 30, 40, 60, 70, 80, 90, 100, 200, 300]
console.log(x)
console.log(y)
console.log(z)

console.log(v)
console.log(p)

console.log("----- iterating arrays (with index of each array element) -----");
let letters = [...'Hello World'];
let value = '';

const [index, val] = letters.entries();
console.log(index);
console.log(val);

for (let [i, l] of letters.entries()) {
    value += i + l;
}
console.log(value);