let arr = [1, 2, 1, 5, 1, 7, 2, 3, 9, 4, 7, 8]
let res = []
for (let item of arr) {
    if (!res.includes(item)) {
        res.push(item)
    }
}
console.log(res);

// for in
// for of
// forEach
// map
// filter