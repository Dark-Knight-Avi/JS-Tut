let students = [
    {
        "name": "Vinay",
        "usn": 124
    },
    {
        "name": "Sourav",
        "usn": 104,
    },
    {
        "name": "Bipin",
        "usn": 22
    }
]

let newStudents = students.map((student) => {
    return { ...student, "type": "student" }
})
console.log(newStudents);

let aboveH = students.filter((student) => student.usn >= 100 && student.name.charAt(0) === 'S')
console.log(aboveH);

// [
//     {
//         "name": "Vinay",
//         "usn": 124,
//         "type": "student"
//     },
//     {
//         "name": "Sourav",
//         "usn": 104,
//         "type": "student"
//     },
//     {
//         "name": "Bipin",
//         "usn": 22,
//         "type": "student"
//     }
// ]

