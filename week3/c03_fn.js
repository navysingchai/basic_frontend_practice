function getFreqOfWords(sentence){
    if(!sentence) return undefined ;

    let obj = {};
    let word = sentence.toLowerCase().split(" ");
    for(let i = 0; i < word.length; i++){
        if(obj[word[i]]){
            obj[word[i]] += 1;
        } else{
            obj[word[i]] = 1;
        }
    }
    return obj;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))

// const words = "Today is present and present is your gift".toLocaleLowerCase().split(" ");
// const newword = words.reduce((acc, cur) => {
//     acc[cur] = 0
//     console.log(acc)
//     console.log("---------");
//     return acc;
// }, {});

console.log("------------------");

[1,2,3].reduce((acc, cur, idx) => acc + cur, 0);
// รอบที่ 1: acc=0, cur=1, idx=0 -> 1
// รอบที่ 2: acc=1, cur=2, idx=1 -> 3
// รอบที่ 3: acc=3, cur=3, idx=2 -> 6 (คืน 6)

function addition(...x) {
    return x.reduce((a, c) => a += c, 0);
}

console.log(addition(5, 10) + addition(10, 10));
console.log(typeof addition);


function dosomething_non_primitive(x) {
    x[1] = 0;
}
function dosomething_primitive(x) {
    x = 15;
}

x = [10, 10, 10, 10];
dosomething_non_primitive(x);
console.log(x);

y = 10;
dosomething_non_primitive(y);
console.log(y);

let z = addition;
console.log(z(1, 2));

function calculation(fn, ...x) {
    // console.log(x) : [n, n, ..., n]
    // console.log(...x) : n, n, ..., n
    return fn(x);
}
console.log(calculation((y) => y.reduce((a, c) => a += c, 0), 10, 20, 30, 40, 50, 60));


console.log("---------------")
function t(x) {
    return x;
}
function t2(x) {
    return x + 100;
}

console.log(t(t2)(10)); // t(t2) = t2(10);

const my_t = t;
console.log(my_t(10));

console.log("---------------")

function do_some_thing(a, b, ...c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(`length of all argument : ${arguments.length}`);
    console.log(a, b, c);
}

do_some_thing(1, 2, 3, 5, 10, 15);

function sum(...a){
    return a.reduce((a, c) => a += c, 0);
}

function summmm(...a) {
    return [...arguments].reduce((a, c) => a += c, 0);
}

console.log(sum(10, 20, 30, 40));
console.log(summmm(10, 20, 30, 40));

function do_some_thingg(greet = "Hi", someone = "Guest", firstSent) {
    return `${greet} ${someone} ${firstSent}`;
}

// console.log(do_some_thingg());
// console.log(do_some_thingg('abc'));
// console.log(do_some_thingg('xyz', 'aaa'));
// console.log(do_some_thingg('xyz', 'aaa', 'bbb'));

// console.log()