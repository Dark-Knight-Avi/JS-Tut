// let text = "This is my Js Code"
// let len = text.length
// let newText = text.slice(12, 18)
// console.log(newText);
// // let str = text.substring(-50, 7)
// let str = text.substr(3, 8)
// console.log(str)
// let str1 = "                                             name1                                         ab                         "
// let str1cp = "                                             name1                                         ab                         "
// let str2 = "name2"

// let str3 = str2.concat(str1)
// console.log(str1.length);
// console.log(str1.trimEnd().length);
// console.log(str1cp.trimStart().length);
// console.log(str1.length);
// console.log(str1cp.length);
// console.log(str2);
// console.log(str3);


// let str = "Vinay is a bhayankar boy"
// let res = str.split(" ");
// console.log(res);

let number = 123
console.log(number);
let str = number.toString()
console.log(str);
let arr = str.split("")
console.log(arr);
let reverse = arr.reverse()
console.log(reverse);
let newStr = arr.join("")
console.log(newStr);
let rev = Number(newStr)
console.log(rev);

console.log(Number(number.toString().split("").reverse().join("")))