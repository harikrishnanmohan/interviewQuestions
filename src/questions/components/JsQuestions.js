// array
console.log([1, 2, 3] + [4, 5, 6]);

// postfix operator
let a = 5;
let b = a++;
let c = ++a;
console.log(b, c);

//
console.log(-true);
console.log(!"Hari");

//
console.log([] + []);
console.log([1] + []);
console.log([1] + "abc");

//
function args(...args) {
  console.log(typeof args);
}
args(21);

//
const obj = {
  a: 1,
  b: 2,
  a: 3,
};
console.log(obj);

//
var z = 1,
  y = (z = typeof y);

console.log(y);
console.log(z);

//
console.log("a" - -"1");
console.log("z" - +"1");

console.log("1" - -"1");
console.log("a" - -"a");
console.log("a" + +"a");

//
console.log(false || null || true);
console.log(false && null && true);

//
const ab = [1];
const bc = [2];
console.log(ab + bc);

//
{
  const a = [1, 2];
  const b = "1,2";
  console.log(a == b);
}

//

const arr = ["ate", "eat", "tae", "bat", "cat"];
const secondArr = arr.map((item) => [...item].sort().join(""));
console.log(secondArr);
const setArr = [...new Set(secondArr)];
console.log(setArr);
const result = [];
for (let i = 0; i < setArr.length; i++) {
  const a = [];
  for (let j = 0; j < secondArr.length; j++) {
    if (setArr[i] === secondArr[j]) a.push(arr[j]);
  }
  result.push(a);
}
console.log(result);

//
for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i));
}
// solve the closure issue - Use an IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(() => console.log(i));
  })(i);
}
// or let
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i));
}

/*
Your code has a common closure issue with var

The for loop executes, incrementing i from 0 to 10.
setTimeout is asynchronous and runs after the loop completes.
By the time setTimeout callbacks execute, i is already 10.
Result: The console logs 10 ten times, instead of 0, 1, 2, ... 9.
*/

//
