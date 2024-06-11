// const { name } = require('ejs')
// let mongoose=require('mongoose')
// let userSchema=mongoose.Schema({
//     subject:String,
//     mark:Number,
//     totalMarks:Number,
//     passStatus:Boolean,
//     result:Boolean
// })

// let Good=mongoose.model('Good',userSchema)


// // backend anythink export to use module
// module.exports=Good



// signup form schema create
let mongoose=require("mongoose")
let userSchema=mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String
})

// collection create
let Sig=mongoose.model("Sig",userSchema)
module.exports=Sig