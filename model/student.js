const mongoose=require('mongoose')


let studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    college:{
        type:String,
        required:true,
        
    },
    degree:{
        type:String,
        required:true,
       
    },
    tenth:{
        type:Number,
        required:true,
        max:100,

    },
    twelth:{
        type:Number,
        required:true,
        max:100,
    },
    cpi:{
        type:Number,
        required:true,
        max:10,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    }

    

})
let Student=mongoose.model('Student',studentSchema)
module.exports=Student;