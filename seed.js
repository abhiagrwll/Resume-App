const mongoose=require('mongoose')
const Student = require('./model/student')
let students=[
    {
        name: "Abhinav Agrawal",
        college:"gla",
        degree: "engineering",
        tenth:95,
        twelth:94,
        cpi:9,
        email:'abhi.ahrwl11@gmail.com'
    },
    {
        name: "Rishank Agrawal",
        college:"gla",
        degree: "bba",
        tenth:95,
        twelth:90,
        cpi:9.2,
        email:'rish11@gmail.com'
    },
    {
        name: "Bhoomi Agrawal",
        college:"gla",
        degree: "llb",
        tenth:85,
        twelth:94,
        cpi:9,
        email:'bhoomi11@gmail.com'
    },
    {
        name: "Yash Agrawal",
        college:"gla",
        degree: "bcom",
        tenth:95,
        twelth:47,
        cpi:9,
        email:'yahsl11@gmail.com'
    }
]
async function seedData(){
     await Student.insertMany(students)
    console.log('Data seeded')
}
module.exports=seedData;