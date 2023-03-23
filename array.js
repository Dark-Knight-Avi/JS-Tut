let arr = [1, 2, 3, 4, 5]
// console.log(arr);
// Using for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// using for in
// let sum = ""
// Iterates the index of an array
// for (let item in arr) {
//     // console.log(item);
//     sum += arr[item]
// }
// using for of
// let sum = 0
// for (let item of arr) {
//     sum += item
// }
// console.log(sum);

// console.log(12 + 14 + 15 + "ab" + 12 + 13 + 78)


// Problem: add 1 to each element of arr

// arr.forEach((item) => {
//     item += 1
//     console.log(item);
// });

// console.log(arr);
// Map
// arr.map((item) => {

// })

// Function:

// const fun = (item) => {
//     item += 1
//     console.log(item);
// }
// arr.forEach(item => fun(item))
// function fun(item = 0) {
//     item + 1
//     console.log(item);
// }
// fun()
// console.log(arr);

// let newArr = arr.map((item) => {
//     return item + 1
// })
// console.log(newArr);
let num = [4, 9, 16, 36, 144, 81]

let root = num.map((item) => {
    console.log(item);
    return Math.sqrt(item)
})
console.log(root);

for (let item of num) {
    if (item % 2 === 0) {
        console.log(item);
    }
}
// let even = num.filter((item) => item % 2 === 0)
// console.log(even);


