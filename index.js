console.log("database connection");
let express = require("express");
let app = express();
app.get("/", (req, res) => {
  res.send("home route create");
});

// mongodb connect with express js (server)
// let mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/newdatabasecreate")
//   .then(() => {
//     console.log("database easily connect");
//   })
//   .catch(() => {
//     console.log("some error");
//   });
// database connection done





// schemacreate
// let Userschema = mongoose.Schema({
//   name: String,
//   lastName: String,
//   num: Number,
//   isBool: Boolean,
// });

// collection create
// let User=mongoose.model("User",Userschema)
// collection create done


// collection inner data add
// let user=new User({name:"hye",last:"bye",num:1234,isBool:true})
// user.save()
// let n=new User({name:"good",lastName:"thank you",num:7878,isBool:false})
// n.save()
// data addition done


// schema and collection create otherfile and import other file
let Good=require('./mongodb')
let mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/other").then(()=>{
    console.log("database connection successful connect");
}).catch(()=>{
    console.log("some error create to connect database");
})

let nn=new Good({subject:"programming",mark:98,totalMark:99,passStatus:true})
nn.save()

app.listen(4000, () => {
  console.log("server runing");
});
