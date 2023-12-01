const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const seedData = require('./seed');
const studentRoutes=require('./routes/studentRoutes')


mongoose.connect('mongodb://127.0.0.1:27017/resume')
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("DB NOT CONNECTED",err)})

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')))

app.use(studentRoutes);


// seedData()
app.listen(8080,()=>{
    console.log(`server connected at port at 8080`)
})