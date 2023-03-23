// Count the number of each characters
let str = "Sourav Loves Java Programming"
let arr = str.split('')
console.log(arr);
// let res = {}
// for(let i = 0; i < arr.length; i++){
//     let count = 1
//     for(let j = i + 1; j < arr[i].length; j++){

//     }
// }
let newArr = []

for (let item in arr) {
    if (!newArr.includes(arr[item])) {
        newArr.push(arr[item])
    }
}
console.log(newArr);
const res = {}
for(let item of newArr) {
    let count = 0
    for(let element of arr){
        if(item === element){
            count++
        }
    }
    res[item] = count
}
console.log(res);
for(let item in res){
    if(res[item] > 1){
        console.log(item, ": ", res[item]);
    }
}