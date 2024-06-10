const { name } = require('ejs')
let mongoose=require('mongoose')
let userSchema=mongoose.Schema({
    subject:String,
    mark:Number,
    totalMarks:Number,
    passStatus:Boolean,
    result:Boolean
})

let Good=mongoose.model('Good',userSchema)


// backend anythink export to use module
module.exports=Good